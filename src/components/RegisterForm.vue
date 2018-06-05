<template>
  <div style="margin-top: 20px">
    <div class="contaner">
      <div class="card col-sm-4 offset-sm-4">
        <div class="card-body">
          <h3 class="card-title">
            <span>Register your company</span>
          </h3>
          <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input v-model="login" type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input  v-model="password" type="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Repeat password</label>
              <input  v-model="repeatPassword" type="password" class="form-control" placeholder="Password">
            </div>
              <div class="form-group">
              <label for="exampleInputPassword1">Company name</label>
              <input  v-model="companyName" type="password" class="form-control" placeholder="Password">
            </div>
            <button class="btn btn-primary" style="margin-top:20px" @click="handleLogin()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TimePicker from "@/components/TimePicker";
import doLogin from "@/utils/auth";

export default {
  data() {
    return {
      login: "",
      password: "",
      repeatPassword: "",
      companyName: ""
    };
  },
  methods: {
    handleLogin() {
      doLogin(this.login, this.password);
    }
  }
};
</script>