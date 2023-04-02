import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

import router from './router'
app.use(router)

import BaseLayout from './components/Layout/BaseLayout.vue'
app.component("BaseLayout", BaseLayout)

app.mount('#app')
