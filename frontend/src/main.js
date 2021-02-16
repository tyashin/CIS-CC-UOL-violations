import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMeta from 'vue-meta';
import vueKanban from 'vue-kanban';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(vueKanban);
Vue.use(VueMeta);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
