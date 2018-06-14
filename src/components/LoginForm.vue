<template>
  <div style="margin-top: 20px">
    <div class="contaner">
      <div class="card col-sm-4 offset-sm-4">
        <div class="card-body">
          <h3 class="card-title">
            <span>Sign in</span>
            <i class="fas fa-sign-in-alt"></i>
          </h3>
          <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input v-model="login" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input  v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button class="btn btn-primary" style="margin-top:20px" @click="handleLogin()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import VueNotifications from "vue-notifications";
import login from "@/utils/auth";

export default {
  data() {
    return {
      login: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      login(this.login, this.password).catch(err => {
        if (err.response.status === 403) {
          this.showAuthErrorMsg();
        }
      });
    }
  },
  notifications: {
    showAuthErrorMsg: {
      type: VueNotifications.types.error,
      title: "Error",
      message: "Wrong login or password"
    }
  }
};
</script>