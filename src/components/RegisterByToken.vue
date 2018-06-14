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
            <label>Email:</label>
            <b-form-input v-model="password" type="text" placeholder="Password"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label>Email:</label>
            <b-form-input v-model="repeatPassword" type="text" placeholder="Repeat password"></b-form-input>
          </b-form-group>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password : "",
    }
  },
  mounted() {

  }
}
</script>
