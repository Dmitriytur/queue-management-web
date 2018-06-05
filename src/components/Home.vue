<template>
<div>
  <div class="container" style="margin-top:20px">
    <div class="row">
      <div class="col-sm-6 offset-sm-3">
        <h1 class="col-sm-6 offset-sm-3">Home page</h1>
        <router-link tag="button" to="/register" type="button" class="btn btn-success btn-block">Register company <i class="far fa-building"></i></router-link>
        <router-link tag="button" to="/login" type="button" class="btn btn-info btn-block">Sign-in  <i class="fas fa-sign-in-alt"></i></router-link>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {};
</script>
