<template>
  <b-container style="margin-top: 50px">
    <b-row>
      <b-col md="3">
        <b-list-group>
          <b-list-group-item to="/admin">
            <span>Details</span>
            <i class="far fa-building float-right"></i>
          </b-list-group-item>
          <b-list-group-item to="/admin/structure">
            <span>Structure</span>
            <i class="fas fa-sitemap float-right"></i>
          </b-list-group-item>
          <b-list-group-item to="/admin/managers">
            <span>Managers</span>
            <i class="fas fa-users float-right"></i>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col md="9">
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {};
</script>