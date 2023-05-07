import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Customer/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/Login.vue')
    },
    {
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('../pages/NotFound.vue'),
	},
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../pages/Customer/Cart.vue')
    },
    {
        path: '/admin',
        children: [
            {
                path: '',
                name: 'Admin',
                component: () => import('../pages/Admin/Home.vue')
            },
            {
                path: 'produk',
                name: 'AdminProduk',
                component: () => import('../pages/Admin/Product.vue')
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router