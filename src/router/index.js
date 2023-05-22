import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import NotFound from '../pages/NotFound.vue'

import UserLayout from '../pages/user/components/Layout.vue'
import LeftSidebar from '../pages/user/components/LeftSidebar.vue'
import Profile from '../pages/user/Profile.vue'
import Cart from '../pages/user/Cart.vue'
import TokoProduct from '../pages/user/toko/Product.vue'
import TokoNewProduct from '../pages/user/toko/NewProduct.vue'

const routes = [
    {
        path: '/',
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: 'login',
                name: 'Login',
                component: Login
            },
            {
                path: 'register',
                name: 'Register',
                component: Register
            },
            {
                path: ':pathMatch(.*)*',
                name: 'NotFound',
                component: NotFound
            },
        ]
    },
    {
		path: '/user',
        component: UserLayout,
        children: [
            {
                path: '',
                name: 'Profile',
                component: Profile,
                meta: { requiresAuth: true, role: "user" },
            },
            {
                path: 'cart',
                name: 'Cart',
                component: Cart,
                // meta: { requiresAuth: true, role: "user" },
            },
            {
                path: 'toko',
                children: [
                    {
                        path: 'product',
                        name: 'TokoProduct',
                        component: TokoProduct,
                        meta: { requiresAuth: true, role: "user" },
                    },
                    {
                        path: 'new-product',
                        name: 'TokoNewProduct',
                        component: TokoNewProduct,
                        meta: { requiresAuth: true, role: "user" },
                    },
                ]
            },
        ]
	},
    {
        path: '/admin',
        children: [
            {
                path: '',
                name: 'Admin',
                component: () => import('../pages/admin/Home.vue'),
                meta: { requiresAuth: true, role: "admin" },
            },
            {
                path: 'produk',
                name: 'AdminProduk',
                component: () => import('../pages/admin/Product.vue'),
                // meta: { requiresAuth: true, role: "admin" },
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router