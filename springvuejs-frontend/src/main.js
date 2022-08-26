import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './gridsystem.css'
import { createStore } from 'vuex'
import storeConfig from './store'
import createPersistedState from 'vuex-persistedstate'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const plugins = [createPersistedState()];
const store = createStore({
    ...storeConfig,
    plugins
})
const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus)

router.beforeEach((to, from, next) => {
    const { isAuthenticated, role } = store.state;
    if(to.meta.requireAuth) {
        if(to.meta.role == role) {
            next();
        } else {
            next({path: "/accessdenied"});
        }
    } else {
        next();
    }
})

router.isReady().then(() => {app.mount('#app');})