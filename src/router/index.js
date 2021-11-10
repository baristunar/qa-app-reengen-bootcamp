import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'homepage',
    component:  () => import( '@/views/homepage')
  },
  {
    path:'/login',
    name:'login',
    component:  () => import( '@/views/login')
  },
  {
    path:'/new-question',
    name:'new-question',
    component:  () => import( '@/views/new-question')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
