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
app.use(store);

router.beforeEach((to, from, next) => {
    const { isAuthenticated, role } = store.state;
    console.log(store.state.isAuthenticated);
    console.log(isAuthenticated);
    console.log(role);
    console.log(to);
    console.log(from);
    const path = to.fullPath;
    console.log(path);
    if(!to.meta.requireAuth) {
        next();
        console.log("Không cần authen")
    } else if(isAuthenticated == false) {
        console.log("Cần authen nhưng chưa authen")
        next({path: "/accessdenied"});
    } else if(path.startsWith(`/${role}`)) {
        console.log("Đã authen và đúng role");
        next();
    } else {
        console.log("Đã authen nhưng chưa đúng role");
        next({path: "/accessdenied"});
    }
})

router.isReady().then(() => {app.mount('#app');})