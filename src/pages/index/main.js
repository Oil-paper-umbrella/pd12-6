import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../../store'
import axios from '../../control/filter/http.js'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import '../../assets/css/iconfont.css'
import '../../control/directives.js'
Vue.config.productionTip = false

import moment from 'moment'
Vue.filter('filterDate', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
  // 如果直接调用得到的是当前的时间，可以通过传递值，来获取对应的时间
  return moment(dataStr).format(pattern);
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')