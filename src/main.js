import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

import router from './router'
app.use(router)

import BaseLayout from './components/Layout/BaseLayout.vue'
import Navbar from './components/Layout/Navbar.vue'
app.component("BaseLayout", BaseLayout)
app.component("Navbar", Navbar)

import dummy from './assets/js/dummy'
app.provide("allProduct", dummy)

const endApi = {
    register: "https://localhost:44347/api/login/register",
    login: "https://localhost:44347/api/login",
}
app.provide("endApi", endApi)


app.mount('#app')
