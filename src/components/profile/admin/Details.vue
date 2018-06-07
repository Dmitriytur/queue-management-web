<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">
        <span>Details</span>
      </h3>
      <div class="form-group">
        <label>Company link</label>
        <div class="input-group mb-3">
          <input v-model="companyLink" type="text" class="form-control" id="companyLinkInput" placeholder="Link" readonly>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" data-toggle="popover" id="copyButton"  data-placement="top" data-content="Copied to clipboard" @click="copyToClipboard()"
              type="button">
              <i class="far fa-copy"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>Company name</label>
        <input v-model="company.name" type="text" class="form-control" placeholder="Company name">
      </div>
      <div class="form-group">
        <label>Description</label>
        <vue-editor v-model="company.description"></vue-editor>
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
import $ from "jquery";

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      company: {},
      companyLink: ""
    };
  },
  methods: {
    save() {
      axios
        .put(BASE_URL + "/companies/" + this.company.id, this.company)
        .catch(err => {
          console.log(err);
        });
    },
    copyToClipboard() {
      var copyText = document.getElementById("companyLinkInput");
      copyText.select();
      document.execCommand("copy");
      setTimeout(() => {
        $("#copyButton").popover("hide");
      }, 1000);
    }
  },
  mounted() {
    axios
      .get(BASE_URL + "/users/" + getId() + "/company")
      .then(response => {
        this.company = response.data;
        this.companyLink =
          "http://" +
          window.location.hostname +
          ":" +
          window.location.port +
          "/companies/" +
          this.company.id;
      })
      .catch(err => {
        console.log(err);
      });

    $(function() {
      $('[data-toggle="popover"]').popover();
    });
  }
};
</script>