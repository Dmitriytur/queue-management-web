<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="color:">
    <a class="navbar-brand" href="#">Queue managment</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/">
           <a class="nav-link">Home</a>
          </router-link>
        </li>
         <li class="nav-item">
          <router-link to="/login">
           <a class="nav-link">Sign-in</a>
          </router-link>
        </li>
        <li class="nav-item ">
          <router-link to="/register">
           <a class="nav-link">Register</a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>