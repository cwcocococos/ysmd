import Vue from 'vue'
import Router from 'vue-router'
import admin from "./admin";
import goods from "./goods";
import shop from "./shop"
import adv from "./adv"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      ...admin,
      ...goods,
      ...shop,
      ...adv
  ]
})
