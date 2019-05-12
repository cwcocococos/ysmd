import Vue from 'vue'
import Router from 'vue-router'
import Shopcar from "../views/Shopcar";
import Main from "../views/Main";
import User from "../views/User"
import second from "@/router/main"
import Shopcont from "../components/Shopcontent/shopCont"
import Search from "@/components/Home/Search"

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...second,
    {
      path: '/main',
      alias:"/",
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
    },
    {
      path:"/search",
      name:"search",
      component:Search
    }
  ]
})
