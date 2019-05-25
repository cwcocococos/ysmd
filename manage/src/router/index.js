import Vue from 'vue'
import Router from 'vue-router'
import admin from "./admin";
import goods from "./goods";
import shop from "./shop"
<<<<<<< HEAD
import adv from "./adv"
Vue.use(Router)
=======
import User from "./user"
Vue.use(Router);
>>>>>>> 0e6e9dd6b5fe4814962f734a1439f9cbe0a54081

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      ...admin,
      ...goods,
      ...shop,
<<<<<<< HEAD
      ...adv
=======
      ...User
>>>>>>> 0e6e9dd6b5fe4814962f734a1439f9cbe0a54081
  ]
})
