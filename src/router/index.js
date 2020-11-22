
import Vue from 'vue'
import VueRouter from 'vue-router'
import Acc from '../components/Acc.vue'
import Data from '../components/data.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Acc',
    component: Acc,
  },
  {
    path: '/data',
    name: 'Data',
    component: Data,
  
  },



]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
