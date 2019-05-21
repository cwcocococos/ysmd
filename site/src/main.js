import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from "axios"
import ElementUI from 'element-ui';// ui 核心 库
import 'element-ui/lib/theme-chalk/index.css';// 组件库所用到时的样式

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http=axios;
axios.interceptors.request.use(config=>{
  config.url="/yang/"+config.url+"?t="+Date.now();
  return config;
})
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
