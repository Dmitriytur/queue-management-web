<template>
  <div style="margin-top: 20px">
    <div class="contaner">
      <b-card v-bind:title="company.name" class=" col-sm-8 offset-sm-2">
        <div v-html="company.description"></div>
      </b-card>
    </div>
    <b-card title="Timetable" class=" col-sm-8 offset-sm-2">
      
    </b-card>
  </div>
</template>


<script>
  import axios from "axios";
  import BASE_URL from "@/utils/api";

  export default {
    data() {
      return {
        company: {},
      };
    },
    mounted() {
      axios
        .get(BASE_URL + "/companies/" + this.$route.params.id)
        .then(response => {
          this.company = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
</script>