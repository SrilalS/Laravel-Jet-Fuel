import Vue from 'vue';
import VueRouter from "vue-router";

const Authentication = () => import(/* webpackChunkName: "Authentication" */ '../Auth/Authentication');

const Home = () => import(/* webpackChunkName: "Home" */ '../Views/Home');


Vue.use(VueRouter);

const routes = [
    { name:'Auth',path: '/auth', component: Authentication },
    { name:'Home',path: '/', component: Home },
];

const Router = new VueRouter({
    mode: 'history',
    routes
});

export default Router;
