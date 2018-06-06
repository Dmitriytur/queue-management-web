<template>
  <div>
    <b-card title="Managers">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Registered</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="manager in managers" :key="manager.id">
            <td>{{manager.login}}</td>
            <td class="greenText">Yes</td>
          </tr>
        </tbody>
      </table>
      <add-manager v-bind:companyId="company.id" v-on:ok="loadManagers()"></add-manager>
    </b-card>
   
  </div>
</template>

<script>
  import { getManagersForActiveAdmin, getCompanyForUser } from "@/utils/api";
  import AddManager from '@/components/profile/admin/AddManager'

  export default {
    components: {
      AddManager
    },
    data() {
      return {
        managers: [],
        company: {}
      };
    },
    methods: {
      loadManagers() {
        getManagersForActiveAdmin()
          .then(response => {
            this.managers = response.data;
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    mounted() {
      this.loadManagers();
      getCompanyForUser().then(response => {
        this.company = response.data;
      });
    }
  };
</script>

<style>
  .greenText {
    color: green;
  }
</style>