import type { RouteRecordRaw } from 'vue-router'
import { route as cartRoute } from './cart'
import { route as categoryRoute } from './category'
import { route as productsRoute } from './products'

export const routes: readonly RouteRecordRaw[] = [
  cartRoute,
  categoryRoute,
  productsRoute,
] as const;