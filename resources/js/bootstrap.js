import Echo from 'laravel-echo';
import store from './store';

window._ = require('lodash');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';

/*
try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}
*/


let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

window.io = require('socket.io-client');

if (typeof io !== 'undefined') {
    window.Echo = new Echo({
        broadcaster: 'socket.io',
        host: window.location.hostname + ':6001',
        auth: {
            headers: {
                'Authorization': `Bearer ${store.state.token}`,
            },
        },
        csrfToken: token.content
    });
}