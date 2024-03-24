import type { RouteRecordRaw } from 'vue-router'
import { route as cartRoute } from './cart'
import { route as categoryRoute } from './category'
import { route as productsRoute } from './products'
import { route as productRoute } from './products/product.ts'

export const routes: readonly RouteRecordRaw[] = [
  cartRoute,
  categoryRoute,
  productsRoute,
  productRoute,
] as const;