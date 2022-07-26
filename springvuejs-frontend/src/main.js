import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './gridsystem.css'
import { createStore } from 'vuex'
import storeConfig from './store'
import createPersistedState from 'vuex-persistedstate'

const plugins = [createPersistedState()];
const store = createStore({
    ...storeConfig,
    plugins
})
const app = createApp(App);
app.use(router);
// app.use(plugins)
app.use(store);
app.mount('#app');