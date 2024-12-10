import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

import MyHome from './pages/MyHome.vue'
import MyOrder from './pages/MyOrder..vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: MyHome },
  { path: '/order', name: 'Order', component: MyOrder }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
