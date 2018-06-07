<template>
  <div style="margin-top: 20px">
    <div class="contaner">
      <b-card v-bind:title="company.name" class=" col-sm-10 offset-sm-1">
      </b-card>
    </div>
    <b-card title="Timetable" class=" col-sm-10 offset-sm-1">
      <b-row>
        <b-card title="Search" class="col-md-3">
          <tree :tree-data="company.rootCategory"></tree>
        </b-card>
        <b-card title="Queues" class="col-md-9">
          <manager-timetable v-show="timetableLoaded"></manager-timetable>
        </b-card>
      </b-row>
    </b-card>
  </div>
</template>


<script>
import EventBus from "@/utils/event-bus";
import axios from "axios";
import BASE_URL from "@/utils/api";
import Tree from "@/components/Tree";
import ManagerTimetable from "./ManagerTimetable";
import { getId } from "@/utils/auth";

export default {
  components: {
    Tree,
    ManagerTimetable
  },
  data() {
    return {
      company: {},
      timetableLoaded: false,
      targetCategoryId: ""
    };
  },
  mounted() {
    EventBus.$on("leafSelected", payLoad => {
      this.timetableLoaded = true;
    });
    axios
      .get(BASE_URL + "/users/" + getId() + "/company")
      .then(response => {
        this.company = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>