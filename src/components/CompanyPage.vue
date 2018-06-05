<template>
  <div style="margin-top: 20px">
    <div class="contaner">
      <div class="card col-sm-8 offset-sm-2">
        <div class="card-body">
          <h3 class="card-title">
            <span>{{company.name}}</span>
          </h3>
          <span>{{company.description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import BASE_URL from "@/utils/api";

export default {
  data() {
    return {
      company: {}
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
