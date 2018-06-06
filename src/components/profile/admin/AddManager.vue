<template>
  <div>
    <b-btn variant="success" v-b-modal.modal1>
      <i class="fas fa-user-plus"></i> Add manager</b-btn>
    <b-modal id="modal1" title="Add manager" @ok="handleOk()">
      <b-form-group>
        <label>Email:</label>
        <b-form-input v-model="user.login" type="text" placeholder="Email"></b-form-input>
      </b-form-group>
      <b-form-group>
        <label>Password:</label>
        <b-form-input  v-model="user.password" type="password" placeholder="Password"></b-form-input>
      </b-form-group>
      <b-form-group>
        <label>Repeat password:</label>
        <b-form-input type="password" placeholder="Repeat password"></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import { addUser } from "@/utils/api";

export default {
  props: ["companyId"],
  data() {
    return {
      user: {},
    };
  },
  methods: {
    handleOk() {
      this.user.company = {};      
      this.user.company.id = this.companyId; 
      this.user.role = "MANAGER";
      addUser(this.user)
        .then(response => {
          this.user.login = "";
          this.user.password = "";
          this.$emit("ok");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

