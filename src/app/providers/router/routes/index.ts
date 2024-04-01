// import type { RouteRecordRaw } from 'vue-router'
// import { route as cartRoute } from './cart'
// import { route as categoryRoute } from './category'
// import { route as productsRoute } from './products'
// import { route as productRoute } from './products/product.ts'
// import {route as testUiRoute} from './testUI';
//
// export const routes: readonly RouteRecordRaw[] = [
//   cartRoute,
//   categoryRoute,
//   productsRoute,
//   productRoute,
//   testUiRoute,
// ] as const;



export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layouts/index.vue'),
    redirect: 'schedule',
    children: [
      {
        path: 'test-ui',
        name: 'test-ui',
        component: () => import('@/pages/TestUi/ui/index.vue')
      },
      {
        path: 'schedule',
        name: 'schedule',
        component: () => import('@/pages/schedulePage.vue'),
        meta: {
          title: 'Расписание',
          layout: true,
          sidebar: true,
        }
      },
      {
        path: 'results',
        name: 'results',
        component: () => import('@/pages/resultsPage.vue'),
        meta: {
          title: 'Результаты',
          layout: true,
          sidebar: true,
        }
      },
      {
        path: 'applications',
        name: 'applications',
        component: () => import('@/pages/applicationsPage.vue'),
        meta: {
          parent: true,
          title: 'Заявки',
          layout: true,
          sidebar: true,
        },
        children: [
          {
            path: 'create',
            name: 'create-application',
            component: () => import('@/pages/createApplication.vue'),
            meta: {
              sidebar: false,
              layout: false,
              parent: false,
              isHasSteps: true,
            },
          },
          {
            path: 'edit/:id',
            name: 'edit-application',
            component: () => import('@/pages/editApplication.vue'),
            meta: {
              sidebar: false,
              layout: false,
              parent: false,
              isHasSteps: false,
              title: 'Редактируем заяку'
            }
          }
        ]
      },
      {
        path: 'guide/enterprises',
        name: 'enterprises',
        component: () => import('@/pages/enterprisesPage.vue'),
        meta: {
          parent: true,
          layout: true,
          title: 'Предприятия',
          sidebar: true,
        },
        children: [
          {
            path: 'add',
            name: 'addEnterprise',
            component: () => import('@/pages/addEnterprisePage.vue'),
            meta: {
              parent: false,
              layout: false,
              title: 'Добавить предприятие',
              sidebar: false,
            }
          },
          {
            path: 'edit/:id',
            name: 'editEnterprise',
            component: () => import('@/pages/editEnterprise.vue'),
            meta: {
              parent: false,
              layout: false,
              title: 'Изменить предприятие',
              sidebar: false,
            }
          }
        ]
      },
      {
        path: '/guide/sports',
        name: 'sports',
        component: () => import('@/pages/mainPage.vue'),
        meta: {
          parent: true,
          layout: true,
          title: 'Спорт',
          sidebar: true,
        },
        children: [
          {
            path: 'add',
            name: 'addSport',
            component: () => import('@/pages/addSport.vue'),
            meta: {
              parent: false,
              layout: false,
              title: 'Добавить спорт',
              sidebar: false,
            }
          },
          {
            path: 'edit/:id',
            name: 'editSport',
            component: () => import('@/pages/editSport.vue'),
            meta: {
              parent: false,
              layout: false,
              title: 'Изменить вид спорта',
              sidebar: false,
            }
          }
        ]
      }
    ]
  }
]