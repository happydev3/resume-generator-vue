import Vue from "vue";
import AutocompleteVue from "./autocomplete-vue.vue";
import { autocompleteBus } from "./autocompleteBus.js";

Vue.use(require("vue-resource"));
Vue.component("autocomplete-vue", AutocompleteVue);

new Vue({
  el: "#app",
  created() {
    autocompleteBus.$on("autocomplete-select", text => {
      console.log("autocomplete-select event: " + text);
    });
  }
});
