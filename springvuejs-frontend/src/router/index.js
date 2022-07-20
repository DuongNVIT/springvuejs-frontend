import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import SignupPage from '../pages/SignupPage.vue';
import AdminPage from '../pages/AdminPage.vue';
import AdminProduct from '../components/AdminProduct.vue';
import AdminUser from '../components/AdminUser.vue';
import AdminBill from '../components/AdminBill.vue';
import AdminWelcome from '../components/AdminWelcome.vue';
import CustomerInfor from '../components/CustomerInfor.vue';
import CustomerBill from '../components/CustomerBill.vue';
import CustomerCart from '../components/CustomerCart.vue';
import CustomerPage from '../pages/CustomerPage.vue';

const routes = [
    {
        path: "/",
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
        ]
    },
    {
        path: "/customer",
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
                path: 'bill',
                component: CustomerBill
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router