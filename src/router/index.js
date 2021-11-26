import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'homepage',
    component: () => import('@/views/homepage')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/new-question',
    name: 'new-question',
    component: () => import('@/views/new-question')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem("user")) || null;

  if (user) {
    store.commit('user/setUser', user);
  }

  if (user && to.name === 'login') {
    console.log("test if");
    next(false)
  } else {
    next();
  }

})



export default router