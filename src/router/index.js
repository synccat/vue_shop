import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.path != '/login' && !sessionStorage.getItem('token')) {
    next('/')
  }
  next()
})
export default router
