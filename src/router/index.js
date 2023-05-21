import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../pages/Home.vue')
            },
            {
                path: 'login',
                name: 'Login',
                component: () => import('../pages/Login.vue')
            },
            {
                path: 'register',
                name: 'Register',
                component: () => import('../pages/Register.vue')
            },
            {
                path: ':pathMatch(.*)*',
                name: 'NotFound',
                component: () => import('../pages/NotFound.vue'),
            },
        ]
    },
    {
		path: '/user',
        children: [
            {
                path: '',
                name: 'Profile',
                component: () => import('../pages/User/Profile.vue'),
                // meta: { requiresAuth: true, role: "user" },
            },
            {
                path: 'cart',
                name: 'Cart',
                component: () => import('../pages/User/Cart.vue'),
                // meta: { requiresAuth: true, role: "user" },
            },
        ]
	},
    {
        path: '/admin',
        children: [
            {
                path: '',
                name: 'Admin',
                component: () => import('../pages/Admin/Home.vue'),
                meta: { requiresAuth: true, role: "admin" },
            },
            {
                path: 'produk',
                name: 'AdminProduk',
                component: () => import('../pages/Admin/Product.vue'),
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