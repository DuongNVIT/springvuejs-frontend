import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './gridsystem.css'
import { createStore } from 'vuex'
import storeConfig from './store'

const store = createStore(storeConfig)

createApp(App).use(router).mount('#app')
