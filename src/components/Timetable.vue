<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Start time</th>
          <th scope="col">End time</th>
          <th scope="col">Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="queue in queues" :key="queue.id">
          <td>{{queue.name}}</td>
          <td>{{queue.description}}</td>
          <td>{{queue.startTime}}</td>
          <td>{{queue.endTime}}</td>
          <td>{{queue.duration}}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import EventBus from "@/utils/event-bus";
import { getQueuesByCategory } from "@/utils/api";

export default {
  data() {
    return {
      startDate: {},
      endDate: {},
      offset: 0,
      queues: [],
      categoryId: ""
    };
  },
  mounted() {
    EventBus.$on("leafSelected", payLoad => {
      getQueuesByCategory(payLoad, this.startDate, this.endDate).then(
        response => {
          console.log(response.data);
          this.queues = response.data;
        }
      );
    });
    this.startDate = moment()
      .isoWeekday(1)
      .startOf("day")
      .add(this.offset, "w");
    this.endDate = moment()
      .isoWeekday(7)
      .startOf("day")
      .add(this.offset, "w");
  }
};
</script>