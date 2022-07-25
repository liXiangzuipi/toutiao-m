import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/Login/index'),
    meta:{
      title:'登录',
    }
  },
  {
    path:'/',
    name:'layout',
    component:()=>import('@/views/Layout'),
    redirect:'/home',
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import('@/views/Home/index.vue')
      },
      {
        path:'/my',
        name:'my',
        component:()=>import('@/views/My/index')
      },
      {
        path:'/qa',
        name:'qa',
        component:()=>import('@/views/Qa/index')
      },
      {
        path:'/video',
        name:'video',
        component:()=>import('@/views/Video/index')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
