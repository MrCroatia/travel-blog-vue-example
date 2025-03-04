import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DestinationsView from '@/views/DestinationsView.vue';
import AboutView from '@/views/AboutView.vue';
import DestinationView from '@/views/DestinationView.vue';
import ContactView from '@/views/ContactView.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/destinations',
        name: 'Destinations',
        component: DestinationsView,
    },
    {
        path: '/destinations/:id',
        name: 'Destination',
        component: DestinationView,
        props: true,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        else {
            return { top: 0 };
        }
    },
});
export default router;
