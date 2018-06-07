<template>
  <div>
    <b-card>
      <b-row>
        <b-col class="text-left">
          <b-btn variant='primary' @click="moveLeft()">
            <i class="fas fa-angle-left"></i>
          </b-btn>
        </b-col>
        <b-col class="text-center">
          <b-form-input v-bind:value="currentDateRange.value" readonly></b-form-input>
        </b-col>
        <b-col class="text-right">
          <b-btn variant='primary' @click="moveRight()">
            <i class="fas fa-angle-right"></i>
          </b-btn>
        </b-col>
      </b-row>
    </b-card>
    <b-card title="">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Day of week</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Start time</th>
            <th scope="col">End time</th>
            <th scope="col">Duration</th>
            <th scope="col">Enroll</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="queue in queues" :key="queue.id">
            <td>{{queue.dayOfWeek}}</td>
            <td>{{queue.name}}</td>
            <td>{{queue.description}}</td>
            <td>{{queue.startTime}}</td>
            <td>{{queue.endTime}}</td>
            <td>{{queue.duration}}m</td>
            <td>
              <b-btn variant="success" @click="showModal(queue.id)">Enroll
                <i class="fas fa-user-plus"></i>
              </b-btn>
              <b-modal :ref="queue.id" size="lg" title="Enroll" @ok="handleOk()">
                <b-form-group>
                  <label>Telephone number:</label>
                  <b-form-input v-model="slotNumber" type="text" placeholder="Telephone number"></b-form-input>
                </b-form-group>
                <b-form-group>
                  <label>Details:</label>
                  <b-form-textarea v-model="slotDetails" :rows="3"></b-form-textarea>
                </b-form-group>
                <time-slots v-bind:slots="queue.timeSlots" @slotSelected="handleSlotSelected"></time-slots>
              </b-modal>
            </td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </div>

</template>

<script>
import VueNotifications from 'vue-notifications'
import EventBus from "@/utils/event-bus";
import { getQueuesByCategory, assignClient } from "@/utils/api";
import TimeSlots from "@/components/TimeSlots";

export default {
  components: {
    TimeSlots
  },
  data() {
    return {
      startDate: {},
      endDate: {},
      offset: 0,
      queues: [],
      categoryId: "",
      selectedSlot: {},
      currentDateRange: {},
      slotNumber: "",
      slotDetails: ""
    };
  },
  methods: {
    handleOk() {
      assignClient(this.selectedSlot.id, this.slotNumber, this.slotDetails).then(
        response => {
          this.showSuccessMsg();
          this.updateTable();
        }
      );
    },
    handleSlotSelected(payLoad) {
      this.selectedSlot = payLoad;
    },
    showModal(id) {
      this.$refs[id]["0"].show();
    },
    updateTime() {
      this.startDate = moment()
        .isoWeekday(1)
        .startOf("day")
        .add(this.offset, "w");
      this.endDate = moment()
        .isoWeekday(7)
        .startOf("day")
        .add(this.offset, "w");
      this.currentDateRange.value =
        this.startDate.format("L") + " - " + this.endDate.format("L");
    },
    updateTable() {
      getQueuesByCategory(this.categoryId, this.startDate, this.endDate).then(
        response => {
          this.queues = response.data.map(q => this.formatQueueTime(q));
        }
      );
    },
    moveRight() {
      this.offset += 1;
      this.updateTime();
      this.updateTable();
    },
    moveLeft() {
      this.offset -= 1;
      this.updateTime();
      this.updateTable();
    },
    formatQueueTime(queue) {
      queue.dayOfWeek = moment(queue.startTime).format("dddd");
      queue.startTime = moment(queue.startTime).format("LT");
      queue.endTime = moment(queue.endTime).format("LT");
      return queue;
    }
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: "Success",
      message: "You successfully enrolled to queue!"
    }
  },
  mounted() {
    EventBus.$on("leafSelected", payLoad => {
      getQueuesByCategory(payLoad, this.startDate, this.endDate).then(
        response => {
          this.categoryId = payLoad;
          this.queues = response.data.map(q => this.formatQueueTime(q));
        }
      );
    });
    this.updateTime();
  }
};
</script>