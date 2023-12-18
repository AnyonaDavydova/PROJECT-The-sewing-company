import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueEvaInput from 'vue-eva-input'

createApp(App).use(store).use(router).use(VueEvaInput).mount('#app')
