<template>
  <div style="margin-top: 20px">
    <div class="contaner">
      <div class="card col-sm-4 offset-sm-4">
        <div class="card-body">
          <h3 class="card-title">
            <span>Register your company</span>
          </h3>
          <div class="form-group">
            <label for="exampleInputPassword1">Company name</label>
            <input v-model="companyName" type="text" class="form-control" placeholder="Company name">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea v-model="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="login" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Repeat password</label>
            <input v-model="repeatPassword" type="password" class="form-control" placeholder="Password">
          </div>
          <button class="btn btn-primary" style="margin-top:20px" @click="register()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TimePicker from "@/components/TimePicker";
import doLogin from "@/utils/auth";
import axios from "axios";
import BASE_URL from "@/utils/api";

export default {
  data() {
    return {
      login: "",
      password: "",
      repeatPassword: "",
      companyName: "",
      description: ""
    };
  },
  methods: {
    register() {
      var registerData = {
        login: this.login,
        password: this.password,
        role: 'ADMIN',
        company: {
          name: this.companyName,
          description: this.description
        }
      };  

      axios
        .post(BASE_URL + "/users/sign-up", registerData)
        .then(response => {
          this.$router.push("/register-success");
        })
        .catch(err => {
          console.log(err.response.status);
        });
    }
  }
};
</script>