import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import SignupPage from '../pages/SignupPage.vue';

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: HomePage
    },
    {
        name: "LoginPage",
        path: "/login",
        component: LoginPage
    },
    {
        name: "SignupPage",
        path: "/signup",
        component: SignupPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router