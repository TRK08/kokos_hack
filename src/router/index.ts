import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      children: [
        {
          path: '/login',
          component: () => import('@/views/LoginPage.vue')
        }
      ]
    }
  ]
})

export default router
