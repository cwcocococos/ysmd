import Vue from 'vue'
import Router from 'vue-router'
import Shopcar from "../views/Shopcar";
import Main from "../views/Main";
import User from "../views/User"
import second from "@/router/main"
import Shopcont from "../components/Shopcontent/shopCont"
import Search from "@/components/Home/Search"
import Inden from "./User/Inden"
import Navigation from "./User/Navigation"
import Purse from "./User/Purse"
import Register from "@/components/Register/register"

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...second,
    {
      path: '/',
      alias:"/main",
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
      path:"/my",
      name:"my",
      component:User,
        meta:{
            isAuthorization:true// 如果值为true是需要登陆以后才可以进入该路由
        }
    },
    {
      path:"/search",
      name:"search",
      component:Search
    },
    {
      path:"/register",
      name:"register",
      component:Register,
    },

    ...Inden,
      ...Navigation,
      ...Purse
  ]


})
