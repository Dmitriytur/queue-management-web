<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">
        <span>Details</span>
      </h3>
      <div class="form-group">
        <label>Company name</label>
        <input v-model="companyName" type="text" class="form-control" placeholder="Company name">
      </div>
      <div class="form-group">
        <label >Description</label>
         <vue-editor v-model="descriptionContent"></vue-editor>
      </div>
      <button class="btn btn-primary" style="margin-top:20px" @click="save()">Save</button>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from "axios";
import BASE_URL from "@/utils/api";
import { getId } from "@/utils/auth";

export default {
    components: {
    VueEditor
  },
  data() {
    return {
      company: {}
    };
  },
  methods: {
    save() {
      axios.put(BASE_URL + "/companies/" + this.company.id)
    }
  },
  mounted() {
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
