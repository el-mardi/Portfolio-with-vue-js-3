import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'
import Shop from '../views/Shop.vue'
import About from '../views/About.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/github',
    beforeEnter () { location.href = 'http://github.com/el-mardi' }
  },
  {
    path: '/twitter',
    beforeEnter () { location.href = 'http://twitter.com' }
  },
  {
    path: '/linkedin',
    beforeEnter () { location.href = 'http://linkedin.com' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
