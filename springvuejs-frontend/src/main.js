import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './gridsystem.css'
import { createStore } from 'vuex'
import storeConfig from './store'

const store = createStore(storeConfig)
const app = createApp(App);
app.use(router);
// createApp(App).use().mount('#app')
app.use(store);
app.mount('#app',)
