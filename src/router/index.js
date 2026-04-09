import { createRouter, createWebHistory } from 'vue-router'
// 导入你的页面组件,就是你们去请你们写的页面过来
import HomeView from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import projects from '/src/views/Projects.vue'
import Contact from '/src/views/Contact.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //宝贝们路由在这里写oo
  {
    path:'/About',
    name:'about',
    component:About
  },
   {
    path:'/Projects',
    name:'projects',
    component:projects
  },
  {
    path:'/Contact',
    name:'contact',
    component:Contact
  }
];
const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router