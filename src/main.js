import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import ToastPlugin from "./plugins/toast";



const app = createApp(App)
const pinia = createPinia();

app.use(router)
app.use(pinia) //registers pinia globally
app.use(ToastPlugin); //registers toast globally

app.mount('#app')
