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


router.beforeEach(async (to, from) => {
	// return checkAuth(to, from)
})

// Injection
import dummy from './features/config/dummy'
app.provide("allProduct", dummy)

// Font Awesome
import FaSetup from './features/config/font-awesome'
FaSetup()

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
app.component('font-awesome-icon', FontAwesomeIcon)


const endApi = {
    register: "https://localhost:44347/api/login/register",
    login: "https://localhost:44347/api/login",
}
app.provide("endApi", endApi)


app.mount('#app')
