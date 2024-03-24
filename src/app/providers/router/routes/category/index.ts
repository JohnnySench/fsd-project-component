import type { RouteRecordRaw } from 'vue-router';
import { route as infoPageRoute } from './info.ts';
import { route as profilePageRoute } from './profile.ts';


export const routeName: string = 'CategoryPage';
export const route: RouteRecordRaw = {
  name: routeName,
  path: '/category',
  component: () => import('@/pages/category'),
  children: [infoPageRoute, profilePageRoute]
};