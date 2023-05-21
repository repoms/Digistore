import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// Vue Router
import router from './router'
app.use(router)

// Pinia (state management)
// import { createPinia } from 'pinia'
// const pinia = createPinia()
// app.use(pinia)

import checkAuth from './features/config/auth'
router.beforeEach(async (to, from) => {
	return checkAuth(to, from)
})

// Injection
import dummy from './features/config/dummy'
app.provide("allProduct", dummy)

// Font Awesome
import FaSetup from './features/config/font-awesome'
FaSetup()

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
app.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')
