import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import routes from './routes'
import { createRouter, createWebHashHistory } from 'vue-router'
import Entry from './Entry.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const app = createApp(Entry)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
