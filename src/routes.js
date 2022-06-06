import About from './pages/About.vue'
import Hello from './pages/Hello.vue'
import SelectDemo from './pages/SelectDemo.vue'
import ServerCaseDemo from './pages/server-case/Main.vue'

export default [
  { path: '/', component: About },
  { path: '/About', component: About },
  { path: '/Hello', component: Hello },
  { path: '/SelectDemo', component: SelectDemo },
  { path: '/ServerCaseDemo', component: ServerCaseDemo },
]
