import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";


import "./styles/quasar.styl";
import iconSet from "quasar-framework/icons/fontawesome";
import "quasar-extras/animate";
import "quasar-extras/material-icons";
import "quasar-extras/fontawesome";
import Quasar from "quasar";

Vue.use(Quasar, axios, {
  config: {},
  iconSet: iconSet
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
