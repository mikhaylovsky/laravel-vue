import axios from 'axios';

export default {
    data() {
        return {
            data: {
                email: null,
                password: null
            },
            errors: {},
            message: null
        }
    },
    methods: {
        submit(event) {
            this.errors = {};

            axios.post(laroute.action('login'), this.data).then(response => {
                event.target.reset();
                this.$router.push({name: 'user'}, function () {

                });
            }).catch(error => {
                if (error.response.status === 400) {
                    this.errors = error.response.data.errors || {};
                }

                if (error.response.status === 401) {
                    this.message = error.response.data.error || null;
                }
            });
        },
    },
}