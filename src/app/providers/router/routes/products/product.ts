import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'ProductPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/products/:productId',
  component: () => import('@/pages/product'),
}