import type { RouteRecordRaw } from 'vue-router'
import {route as ProductCardPage} from './product.ts'
export const routeName: string = 'ProductsPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/products',
  component: () => import('@/pages/products'),
  children: [ProductCardPage]
}