<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">
        <span>Structure</span>
      </h3>
      <div class="form-group">
        <div class="form-group">
          <textarea v-model="structure" class="form-control" id="exampleFormControlTextarea1" rows="20"></textarea>
        </div>
        <button class="btn btn-primary" style="margin-top:20px" @click="save()">Save</button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import BASE_URL from "@/utils/api";
import { getId } from "@/utils/auth";

export default {
  data() {
    return {
      company: {},
      structure: ""
    };
  },
  methods: {
    save() {
      if (this.structure != "") {
        var rootCategory = JSON.parse(this.structure);
        axios
          .put(
            BASE_URL + "/companies/" + this.company.id + "/root-category",
            rootCategory
          )
          .then(response => {
            this.loadData();
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    loadData() {
      axios
        .get(BASE_URL + "/users/" + getId() + "/company")
        .then(response => {
          if (response.data.rootCategory != null) {
            this.structure = JSON.stringify(
              response.data.rootCategory,
              null,
              4
            );
          }
          response.data.rootCategory = null;
          this.company = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>
