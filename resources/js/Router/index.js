import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/Views/Home.vue'),
    },
    {
        path: '/auth',
        component: () => import('@/Auth/Authentication.vue'),
    }
]

const Index = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default Index;
