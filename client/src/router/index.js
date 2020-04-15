/* eslint-disable eol-last */
import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '../views/loginPage.vue'
import mainPage from '../views/mainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginPage
  },
  {
    path: '/mainPage',
    name: 'mainPage',
    component: mainPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router