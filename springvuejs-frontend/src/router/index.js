import { createRouter, createWebHistory } from "vue-router";
import store from "../store"

import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import SignupPage from '../pages/SignupPage.vue';
import AdminPage from '../pages/AdminPage.vue';
import AdminProduct from '../components/AdminBill.vue';
import AdminUser from '../components/AdminUser.vue';
import AdminBill from '../components/AdminProduct.vue';
import AdminWelcome from '../components/AdminWelcome.vue';
import CustomerInfor from '../components/CustomerInfor.vue';
import CustomerBill from '../components/CustomerBill.vue';
import CustomerCart from '../components/CustomerCart.vue';
import CustomerPage from '../pages/CustomerPage.vue';
import AccessDeniedPage from '../pages/AccessDeniedPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

const routes = [
    { 
        path: '/accessdenied', 
        component: AccessDeniedPage 
    },
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/products",
        component: HomePage
    },
    {
        path: "/products/:category",
        component: HomePage
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/signup",
        component: SignupPage
    },
    {
        path: "/admin",
        component: AdminPage,
        children: [
            {
                path: '',
                component: AdminWelcome
            },
            {
                path: 'products',
                component: AdminProduct
            },
            {
                path: 'users',
                component: AdminUser
            },
            {
                path: 'bills',
                component: AdminBill
            }
        ],
        meta: {
            requireAuth: true,
            role: 'admin'
        }
    },
    {
        path: "/user",
        component: CustomerPage,
        children: [
            {
                path: 'cart',
                component: CustomerCart
            },
            {
                path: 'information',
                component: CustomerInfor
            },
            {
                path: 'bills',
                component: CustomerBill
            }
        ],
        meta: {
            requireAuth: true,
            role: 'user'
        }
    },
    {
        path: "/:catchAll(.*)", 
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router