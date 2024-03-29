import type { RouteRecordRaw } from 'vue-router'
export const routeName: string = 'TestUiPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/test-ui',
  component: () => import('@/pages/TestUi/ui/index.vue'),
}