import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPluginPersist from 'pinia-plugin-persist'  // modul na ukladanie dat nakupneho kosika v session storage

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersist)

app.use(pinia)
app.use(router)

app.mount('#app')
