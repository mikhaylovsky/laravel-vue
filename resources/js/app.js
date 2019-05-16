require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import router from './router';
import App from './components/App';

Vue.prototype.router = router;

const app = new Vue({
    el: '#app',
    components: { App },
    router
});
