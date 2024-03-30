import { createApp } from 'vue'
import './styles/base.css';
import { router } from './providers'
import { createPinia } from 'pinia'
import App from './App.vue'
import Wind from './styles/presets/wind';
import PrimeVue from 'primevue/config';
import {useChangeTitleHeader} from '@/shared/lib/meta/index.ts'

const pinia = createPinia()

router.beforeEach((to, from, next) => {
  if (Boolean(to.query.step)) {
  } else {
    useChangeTitleHeader(to.meta.title as string)
  }
  next();
})


export const application = createApp(App).use(router).use(pinia).use(PrimeVue, {unstyled: true, pt: Wind})
