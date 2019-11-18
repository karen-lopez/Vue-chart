import Vue from "vue";
import VueAllAuth from "vue-all-auth";
Vue.use(VueAllAuth, {
  google: {
    // keys for google
    client_id:
      "1094949526044-2tsg65i0iphrgp7ekrqoj40g91apkdog.apps.googleusercontent.com",
    scope: "profile email"
  },
  facebook: {
    // keys for fb
    appId: "YOUR_FB_APP_ID",
    cookie: true,
    xfbml: true,
    version: "v3.2"
  },
  twitter: {
    // keys for twitter
  },
  github: {
    // keys for github
  }
});
Vue.allAuth()
  .google()
  .init();
