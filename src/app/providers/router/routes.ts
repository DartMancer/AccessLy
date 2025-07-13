import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/MainPage.vue'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/roles',
    name: 'roles',
    component: () => import('@/pages/RolesListPage.vue'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/roles/create',
    name: 'role-create',
    component: () => import('@/pages/RoleCreatePage.vue'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/roles/:id',
    name: 'role-details',
    component: () => import('@/pages/RoleDetailsPage.vue'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: {
      layout: 'main',
    },
  },
]
