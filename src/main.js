import './assets/css/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import Notifications from '@kyvg/vue3-notification';
import { authMiddleware } from '@/router/router.middleware'
import router from './router';
import { createPinia } from 'pinia';

authMiddleware()
const app = createApp(App);
const pinia = createPinia();

app.use(Notifications);
app.use(router);
app.use(pinia);
app.mount('#app');
