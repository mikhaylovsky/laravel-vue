import axios from 'axios';

export default {
    data() {
        return {
            data: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
            errors: {}
        }
    },
    methods: {
        submit(event) {
            this.errors = {};

            axios.post(laroute.action('register'), this.data).then(response => {
                event.target.reset();
                // this.$router.push({name: 'home'}, function () {
                //
                // });
            }).catch(error => {
                if (error.response.status === 400) {
                    this.errors = error.response.data.errors || {};
                }
            });
        },
    },
}