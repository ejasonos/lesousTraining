import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Innovation from '../views/Innovation.vue'
import Epharmacy from '../views/Epharmacy.vue'
import Blog from '../views/Blog.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/innovation',
        component: Innovation
    },
    {
        path: '/epharmacy',
        component: Epharmacy
    },
    {
        path: '/blog',
        component: Blog
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router