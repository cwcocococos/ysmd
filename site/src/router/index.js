import Vue from 'vue'
import Router from 'vue-router'
import Shopcar from "../views/Shopcar";
import Main from "../views/Main";
import User from "../views/User"
import Shopcont from "../components/shopCont"

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main

    },
    {
      path: '/sort',
      name: 'sort',
      component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Sort.vue')
      }
    },

    {
      path: '/shop',
      name: 'shopCont',
      component:Shopcont
    },
    {
      path:"/shopcar",
      name:"shopcar",
      component:Shopcar
    },
    {
      path:"/user",
      name:"user",
      component:User
    }
  ]
})
