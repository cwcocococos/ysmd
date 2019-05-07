import Vue from 'vue'
import Router from 'vue-router'
import Shopcar from "../views/Shopcar";
import Main from "../views/Main";
import My from "../views/My"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
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
      path:"/shopcar",
      name:"shopcar",
      component:Shopcar
    },
    {
      path:"/my",
      name:"my",
      component:My
    }
  ]
})
