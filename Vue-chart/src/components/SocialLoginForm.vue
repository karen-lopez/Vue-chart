<template>
  <!-- Google login button -->
  <div class="container text-center p-4">
    <h2>Bienvenido al Sistema de Consulta</h2>
    <br>
    <b-form-group>
      <b-button class="g-signin2" type="submit" variant="danger" @click="ggSignIn" style="min-width: 15rem;">
        <div />Continue with Google
      </b-button>
    </b-form-group>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "SocialLoginForm",
  methods: {
    ggSignIn: function(event) {
      // Prevent default action
      event.preventDefault();
      //console.log("Begin google authentication!");
      Vue.allAuth().google().init();
      //console.log("This is this before calling allAuth(): ");
      Vue.allAuth()
        .google()
        .signIn(
          function(googleUser) {
            var profile = googleUser.getBasicProfile();
            /*console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());*/
            alert("Bienvenid@!"+ " "+ profile.getName());
          },
          function(error) {
            /*console.log("Something went wrong!");
            console.log(error);*/
            alert(error)
          }
        );
        this.$router.push('/Chart');
    }
  }
};
</script>

<style scoped>
</style>
