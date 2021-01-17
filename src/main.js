import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import JwPagination from 'jw-vue-pagination';
import Notifications from 'vue-notification'
import App from './App.vue'

// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false
Vue.component('jw-pagination', JwPagination);
// Vue.use(BootstrapVue);
Vue.use(Notifications)
Vue.use(VueAxios, axios);
new Vue({
  render: h => h(App),
}).$mount('#app')
