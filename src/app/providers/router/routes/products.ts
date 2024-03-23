import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'ProductsPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/products',
  component: () => import('@/pages/products')
}