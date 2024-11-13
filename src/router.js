import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Pricing from "./components/Pricing.vue";
import Schedule from "./components/Schedule.vue";
import Contact from "./components/Contact.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // your routes go here
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/pricing',
            name: 'Pricing',
            component: Pricing
        },
        {
            path: '/schedule',
            name: 'Schedule',
            component: Schedule
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }

    ]
})

export default router