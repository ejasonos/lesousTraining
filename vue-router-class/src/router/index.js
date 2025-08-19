import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import Heropage from '../views/Heropage.vue'

const routes = [
    {
        path: '/',
        name: 'Heropage',
        component: Heropage
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact-us',
        name: 'Contact-Us',
        component: ContactUs
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router