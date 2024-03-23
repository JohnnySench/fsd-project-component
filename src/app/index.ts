import { createApp } from 'vue'
import './styles/base.css';
import { router } from './providers'
import App from './App.vue'
import Wind from './styles/presets/wind';
import PrimeVue from 'primevue/config';


export const application = createApp(App).use(router).use(PrimeVue, {unstyled: true, pt: Wind})
