<template>
  <div class="container" style="margin-top: 50px">
    <div class="row">
      <div class="col-md-3">
        <div class="list-group">
          <router-link to="/admin" class="list-group-item">
            <span>Details</span>
            <i class="far fa-building float-right"></i>
          </router-link>
          <router-link to="/admin/structure" class="list-group-item">
            <span>Structure</span>
            <i class="fas fa-sitemap float-right"></i>
          </router-link>
          <router-link to="/admin/managers" class="list-group-item">
            <span>Managers</span>
            <i class="fas fa-users float-right"></i>
          </router-link>
        </div>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>