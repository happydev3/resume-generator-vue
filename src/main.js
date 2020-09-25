import Vue from 'vue';

import App from './App.vue';
import store from './store';
import './resumeTemplates';
import router from './router';
import { firebase} from './firebase.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();


let app = '';

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App),
      store,
    }).$mount('#app');
  }
});
