import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const About = () => import('@/views/about/About')

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login')
    },
    {
      path: '/',
      redirect: '/login' 
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/init/easyInitPage')
    },
    // 我的路由
    {
      path: '/mine',
      name: 'mine',
      component: Home,
      children: [{
        path: '/detail',
        component: Home
      }, {
        path: '/phone',
        component: Home
      }]
    },
    // 关于路由
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [{
        path: '/detail',
        component: About
      }, {
        path: '/story',
        component: About
      }]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
