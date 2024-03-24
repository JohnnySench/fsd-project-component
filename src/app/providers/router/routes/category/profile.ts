import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'CategoryProfilePage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/category/profile',
  component: () => import('@/pages/category-profile')
}