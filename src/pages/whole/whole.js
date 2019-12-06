import Vue from 'vue'
import Whole from './Whole.vue'
import store from '../../store'
import axios from '../../control/filter/http.js'
import router from "./router";
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../../assets/css/iconfont.css'
Vue.use(ElementUI);
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(Whole)
}).$mount('#whole')
