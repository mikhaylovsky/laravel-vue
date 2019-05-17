import VueRouter from 'vue-router';
import routes from './routes';
import store from "../store";
import axios from "axios";

let router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {

    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (!store.state.isLoggedIn) {
            next({name: 'login'});
            return;
        }

        axios.defaults.headers.post['Authorization'] = `Bearer ${store.state.token}`;
    }

    if (to.path === '/login' && store.state.isLoggedIn) {
        next({ name: 'user' });
        return;
    }

    next();
});

axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        store.commit('logoutUser');
        router.push({name: 'login'});
    }
    return Promise.reject(error)
});

export default router;