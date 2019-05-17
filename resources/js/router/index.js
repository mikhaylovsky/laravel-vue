import VueRouter from 'vue-router';
import routes from './routes';
import store from "../store";
import axios from "axios";

let router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {

    axios.defaults.headers.common['Content-Type'] = 'application/json';

    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (!store.state.isLoggedIn) {
            next({name: 'login'});
            return;
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
    }

    if (to.name === 'login' && store.state.isLoggedIn) {
        next({ name: 'user' });
        return;
    }

    if (to.name === 'logout' && store.state.isLoggedIn) {
        axios.post(laroute.action('logout')).then(response => {
            store.commit('logoutUser');
            next({ name: 'login' });

        }).catch(error => {
            next({ name: 'home' });
        });

        return;
    }

    next();
});

axios.interceptors.request.use(function (request) {
    if (!request.data) {
        request.data = {};
    }

    return request;
});

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