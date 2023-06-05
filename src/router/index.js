import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import NotFound from '../pages/NotFound.vue'
import ProductDetails from '../pages/ProductDetails.vue'
import PublicLayout from '../pages/components/Layout.vue'

import UserLayout from '../pages/user/components/Layout.vue'
import Profile from '../pages/user/Profile.vue'
import Cart from '../pages/user/Cart.vue'
import Invoice from '../pages/user/Invoice.vue'
import InvoiceDone from '../pages/user/InvoiceDone.vue'
import Settings from '../pages/user/Settings.vue'
import TokoProduct from '../pages/user/toko/Product.vue'
import TokoEditProduct from '../pages/user/toko/EditProduct.vue'
import TokoNewProduct from '../pages/user/toko/NewProduct.vue'
import TokoDelivery from '../pages/user/toko/Delivery.vue'
import TokoInvoice from '../pages/user/toko/Invoice.vue'

import AdminLayout from '../pages/admin/components/Layout.vue'
import AdminUser from '../pages/admin/User.vue'
import AdminEditUser from '../pages/admin/UserEdit.vue'
import AdminAddUser from '../pages/admin/UserAdd.vue'
import AdminSettings from '../pages/admin/Settings.vue'
import AdminProduct from '../pages/admin/Product.vue'
import AdminEditProduct from '../pages/admin/EditProduct.vue'
import AdminInvoice from '../pages/admin/Invoice.vue'

import CourierLayout from '../pages/courier/components/Layout.vue'
import CourierProfile from '../pages/courier/Profile.vue'
import CourierOpenOrder from '../pages/courier/OpenOrder.vue'
import CourierOrder from '../pages/courier/Order.vue'
import CourierOrderDone from '../pages/courier/OrderDone.vue'
import CourierSettings from '../pages/courier/Settings.vue'

const routes = [
    {
        path: '/',
        component: PublicLayout,
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
            {
                path: 'product/:guid',
                name: 'ProductDetails',
                component: ProductDetails
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
                meta: { requiresAuth: true, role: "user" },
            },
            {
                path: 'invoice',
                name: 'Invoice',
                component: Invoice,
                meta: { requiresAuth: true, role: "user" },
            },
            {
                path: 'invoice-done',
                name: 'InvoiceDone',
                component: InvoiceDone,
                meta: { requiresAuth: true, role: "user" },
            },
            {
                path: 'settings',
                name: 'Settings',
                component: Settings,
                meta: { requiresAuth: true, role: "user" },
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
                        path: 'edit-product/:guid',
                        name: 'TokoEditProduct',
                        component: TokoEditProduct,
                        meta: { requiresAuth: true, role: "user" },
                    },
                    {
                        path: 'new-product',
                        name: 'TokoNewProduct',
                        component: TokoNewProduct,
                        meta: { requiresAuth: true, role: "user" },
                    },
                    {
                        path: 'delivery',
                        name: 'TokoDelivery',
                        component: TokoDelivery,
                        meta: { requiresAuth: true, role: "user" },
                    },
                    {
                        path: 'invoice',
                        name: 'TokoInvoice',
                        component: TokoInvoice,
                        meta: { requiresAuth: true, role: "user" },
                    },
                ]
            },
        ]
	},
    {
        path: '/courier',
        component: CourierLayout,
        children: [
            {
                path: '',
                name: 'Kurir',
                component: CourierProfile,
                meta: { requiresAuth: true, role: "kurir" },
            },
            {
                path: 'order-list',
                name: 'CourierOpenOrder',
                component: CourierOpenOrder,
                meta: { requiresAuth: true, role: "kurir" },
            },
            {
                path: 'order',
                name: 'CourierOrder',
                component: CourierOrder,
                meta: { requiresAuth: true, role: "kurir" },
            },
            {
                path: 'order-done',
                name: 'CourierOrderDone',
                component: CourierOrderDone,
                meta: { requiresAuth: true, role: "kurir" },
            },
            {
                path: 'settings',
                name: 'CourierSettings',
                component: CourierSettings,
                meta: { requiresAuth: true, role: "kurir" },
            },
        ]
    },
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            {
                path: '',
                name: 'Admin',
                component: AdminUser,
                meta: { requiresAuth: true, role: "admin" },
            },
            {
                path: 'add-user',
                name: 'AdminAddUser',
                component: AdminAddUser,
                meta: { requiresAuth: true, role: "admin" },
            },
            {
                path: 'edit-user/:guid',
                name: 'AdminEditUser',
                component: AdminEditUser,
                meta: { requiresAuth: true, role: "admin" },
            },
            {
                path: 'product',
                name: 'AdminProduct',
                component: AdminProduct,
                meta: { requiresAuth: true, role: "admin" },
            },
            {
                path: 'edit-product/:guid',
                name: 'AdminEditProduct',
                component: AdminEditProduct,
                meta: { requiresAuth: true, role: "admin" },
            },
            {
                path: 'invoice',
                name: 'AdminInvoice',
                component: AdminInvoice,
                meta: { requiresAuth: true, role: "admin" },
            },
            {
                path: 'settings',
                name: 'AdminSettings',
                component: AdminSettings,
                meta: { requiresAuth: true, role: "admin" },
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router