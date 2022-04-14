import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cottages from "@/views/Cottages";
import Activities from "@/views/Activities";
import Rates from "@/views/Rates";
import Contact from "@/views/Contact";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cottages',
    name: 'Cottages',
    component: Cottages,
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities,
  },
  {
    path: '/rates',
    name: 'Rates and Terms',
    component: Rates,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
