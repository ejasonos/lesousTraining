import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contactus from '../views/Contactus.vue'
import Innovation from '../views/Innovation.vue'
import Epharmacy from '../views/Epharmacy.vue'
import Blog from '../views/Blog.vue'

const routes = [
    {
        path: '/about',
        component: About
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/contactus',
        component: Contactus
    },
    {
        path: '/epharmacy',
        component: Epharmacy
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/innovation',
        component: Innovation
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router