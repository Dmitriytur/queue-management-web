<template>
  <div>
    <b-btn variant="success" v-b-modal.modal1>
      <i class="fas fa-user-plus"></i> Add manager</b-btn>
    <b-modal id="modal1" title="Add manager" @ok="handleOk()">
      <b-form-group>
        <label>Email:</label>
        <b-form-input v-model="userEmail" type="text" placeholder="Email"></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import { addUser } from "@/utils/api";
import VueNotifications from "vue-notifications";

export default {
  props: ["companyId"],
  data() {
    return {
      userEmail: ""
    };
  },
  methods: {
    handleOk() {
      var user = {};
      user.login = this.userEmail;
      user.company = {};
      user.company.id = this.companyId;
      user.role = "MANAGER";
      addUser(user)
        .then(response => {
          this.userEmail = "";
          this.showInfoMsg();
          this.$emit("ok");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  notifications: {
    showInfoMsg: {
      type: VueNotifications.types.success,
      title: "Success",
      message: "Manager successfully added!"
    }
  }
};
</script>

