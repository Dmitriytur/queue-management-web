<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/">
      <a class="navbar-brand" href="">Queue managment</a>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item" v-if="!loggedIn">
          <router-link to="/login" class="nav-link">Sign-in
            <i class="fas fa-sign-in-alt"></i>
          </router-link>
        </li>
        <li class="nav-item" v-if="loggedIn">
          <a  class="nav-link" @click="handleGoToProfile()"><i class="fas fa-user"></i> Profile</a>
        </li>
         <li class="nav-item" v-if="loggedIn">
          <a class="nav-link" @click="handleLogout()"><i class="fas fa-sign-out-alt"></i> Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { isLoggedIn, logout, goToProfile } from "@/utils/auth";
import EventBus from "@/utils/event-bus";


export default {
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    handleLogout() {
      logout();
      this.loggedIn = false;
    },
    handleGoToProfile() {
      goToProfile();
    }
  },
  mounted() {
    EventBus.$on("loggedIn", payLoad => {
      this.loggedIn = isLoggedIn();
    });
    this.loggedIn = isLoggedIn();
  }
};
</script>