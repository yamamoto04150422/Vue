import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import AppTop from '@/views/AppTop.vue'
import Sub from '@/views/Sub.vue'

const routeSettings : RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppTop',
    component : () => {
      return import("@/views/AppTop.vue")
    },
  },
  {
    path: '/member/memberList',
    name: 'MemberList',
    component: () => {
      return import("@/views/member/MemberList.vue")
    },
    
  },
  {
    path:'/member/detail/:id',
    props : (routes) => {
      const idNum = Number(routes.params.id)
      return {
        id : idNum
      }
    },
    name:'MemberDetail',
    component : () => {
      return import("@/views/member/MemberDetail.vue")
    },
    
  },
  {
    path:'/member/add',
    name:'MemberAdd',
    component : () => {
      return import('@/views/member/MemberAdd.vue')
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings
})

export default router
