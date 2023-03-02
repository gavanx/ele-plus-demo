import About from './pages/About.vue'
import Hello from './pages/Hello.vue'
import SelectDemo from './pages/select/SelectDemo.vue'
import SelectDemo2ObjectModel from './pages/select/SelectDemo2ObjectModel.vue'
import SelectLimitDemo from './pages/select/SelectLimitDemo.vue'
import ServerCaseDemo from './pages/server-case/Main.vue'

export default [
  { path: '/', component: About },
  { path: '/About', component: About },
  { path: '/Hello', component: Hello },
  { path: '/SelectDemo', component: SelectDemo },
  { path: '/SelectDemo2ObjectModel', component: SelectDemo2ObjectModel },
  { path: '/SelectLimitDemo', component: SelectLimitDemo },
  { path: '/ServerCaseDemo', component: ServerCaseDemo },
]
