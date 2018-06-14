<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">
        <span>Structure</span>
      </h3>
      <div class="form-group">
        <div class="form-group">
          <!-- <textarea v-model="structure" class="form-control" id="exampleFormControlTextarea1" rows="20"></textarea> -->
        </div>
          <div id="jsoneditor" style="height:500px;"></div>
        <button class="btn btn-primary" style="margin-top:20px" @click="save()">Save</button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import BASE_URL from "@/utils/api";
import { getId } from "@/utils/auth";
import JSONEditor from "jsoneditor";
import VueNotifications from "vue-notifications";

export default {
  data() {
    return {
      company: {},
      jsonEditor: {}
    };
  },
  methods: {
    save() {
      this.company.rootCategory.options = this.jsonEditor.get();
      axios
        .put(
          BASE_URL + "/companies/" + this.company.id + "/root-category",
          this.company.rootCategory
        )
        .then(response => {
          this.loadData();
          this.showInfoMsg();
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadData() {
      axios
        .get(BASE_URL + "/users/" + getId() + "/company")
        .then(response => {
          this.jsonEditor.set(response.data.rootCategory.options);
          this.company = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.loadData();
    var container = document.getElementById("jsoneditor");
    var options = {
      templates: [
        {
          text: "Category",
          title: "Insert new category",
          value: {
            value: "",
            options: []
          }
        }
      ]
    };
    this.jsonEditor = new JSONEditor(container, options);
    var json = {
      options: [
        {
          value: "",
          options: []
        }
      ]
    };
    this.jsonEditor.set([]);
    this.jsonEditor.expandAll();
  },
   notifications: {
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: "Success",
      message: "Saved"
    }
  }
};
</script>
