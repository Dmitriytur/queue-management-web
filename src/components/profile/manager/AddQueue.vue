<template>
  <div>
    <b-btn variant="success" v-b-modal.addQueueModal>Add queue
      <i class="fas fa-plus"></i>
    </b-btn>
    <b-modal id="addQueueModal" title="Add queue" @ok="handleOk()">
      <b-form-group>
        <label>Name:</label>
        <b-form-input v-model="name" type="text" placeholder="Queue name"></b-form-input>
      </b-form-group>
       <b-form-group>
        <label>From:</label>
        <vue-timepicker  v-model="startTime" format="HH:mm"></vue-timepicker>
      </b-form-group>
      <b-form-group>
        <label>To:</label>
        <vue-timepicker  v-model="endTime" format="HH:mm"></vue-timepicker>
      </b-form-group>
      <b-form-group>
        <label>Duration (min):</label>
        <b-form-input type="number" min="1" v-model="duration"></b-form-input>
      </b-form-group>
      <b-form-group>
        <label>Date:</label>
        <input type="text" name="dates" class="form-control pull-right">
      </b-form-group>
      <b-form-group>
        <label>Description:</label>
        <b-form-textarea  v-model="description"  :rows="3"></b-form-textarea>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import VueNotifications from "vue-notifications";
import VueTimepicker from "vue2-timepicker";
import { addQueue } from "@/utils/api";
import EventBus from "@/utils/event-bus";

export default {
  props: ["categoryId"],
  components: {
    VueTimepicker
  },
  data() {
    return {
      name: "",
      description: "",
      date: "",
      startTime: {
        HH: "00",
        mm: "00"
      },
      endTime: {
        HH: "00",
        mm: "00"
      },
      duration: 30
    };
  },
  methods: {
    handleOk() {
      var start = this.date.clone().add(this.startTime.HH, 'h').add(this.startTime.mm, 'm');
      var end = this.date.clone().add(this.endTime.HH, 'h').add(this.endTime.mm, 'm');
      var queue = {
        name: this.name,
        description: this.description,
        startTime: start.unix(),
        endTime: end.unix(),
        duration: this.duration,
        categoryId: this.categoryId
      };
      addQueue(queue).then(response => {
        this.showSuccessMsg();
        this.$emit('ok');
      });
    }
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: "Success",
      message: "Queue successfully added!"
    }
  },
  mounted() {
    EventBus.$on("dateSelected", payLoad => {
      this.date = payLoad;
    });
    $('input[name="dates"]').daterangepicker(
      {
        singleDatePicker: true
      },
      function(start, end, label) {
        EventBus.$emit("dateSelected", start);
      }
    );
  }
};
</script>