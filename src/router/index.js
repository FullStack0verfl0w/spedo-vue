import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About';
import Blog from "../views/Blog";
import NotFound from '../views/NotFound';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
    },
    {
        path: '/404',
        name: '404 Not Found',
        component: NotFound,
    },
    {
        path: '*',
        redirect: '/404',
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
