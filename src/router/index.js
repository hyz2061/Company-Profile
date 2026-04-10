import { createRouter, createWebHistory } from 'vue-router'
// 导入你的页面组件,就是你们去请你们写的页面过来
import HomeView from '/src/views/HomePage.vue'
import About from '/src/views/AboutPage.vue'
import projects from '/src/views/ProjectsPage.vue'
import Contact from '/src/views/ContactPage.vue'
import services from '../views/ServicesPage.vue'
import Team from '../views/TeamPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //宝贝们路由在这里写oo
  {
    path: '/About',
    name: 'about',
    component: About
  },
  {
    path: '/Projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/Contact',
    name: 'contact',
    component: Contact
  }, {
    path: '/Services',
    name: 'services',
    component: services
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router