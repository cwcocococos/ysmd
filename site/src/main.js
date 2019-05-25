import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import filters from "@/filters";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from "axios"
import ElementUI from 'element-ui';// ui 核心 库
import 'element-ui/lib/theme-chalk/index.css';// 组件库所用到时的样式
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)
Vue.use(filters);
axios.interceptors.request.use(config=>{
  config.url="/api/"+config.url+"?t="+Date.now();
  return config;
})

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http=axios;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
