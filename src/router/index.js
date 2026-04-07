import { createRouter, createWebHistory } from 'vue-router'
// 导入你的页面组件
import HomeView from '../components/NavBar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 模式
  routes
})

export default router