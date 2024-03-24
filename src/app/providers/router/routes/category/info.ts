import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'CategoryInfoPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/category',
  component: () => import('@/pages/category-info')
}