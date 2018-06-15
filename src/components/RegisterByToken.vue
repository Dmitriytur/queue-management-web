<template>
  <b-container style="margin-top:20px">
    <b-row>
      <b-col offset-md="3" md="6">
        <b-card title="Register">
          <b-form-group>
            <label>Email:</label>
            <b-form-input v-model="email" type="text" placeholder="Email" readonly></b-form-input>
          </b-form-group>
          <b-form-group>
            <label>Password:</label>
            <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label>Repeat password:</label>
            <b-form-input type="password" placeholder="Repeat password"></b-form-input>
          </b-form-group>
          <b-btn @click="handleRegister()" variant="primary">Register</b-btn>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getUserByToken, registerByToken } from "@/utils/api";
import Router from '@/router/index';

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleRegister() {
      registerByToken(this.$route.params.tokenId, this.password).then(response => {
        Router.push("/register-success");
      })
    }
  },
  mounted() {
    getUserByToken(this.$route.params.tokenId).then(response => {
      this.email = response.data.login;
    })
  }
};
</script>
