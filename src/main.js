import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import routes from './routes'
import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from './MainView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const app = createApp(MainView)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
