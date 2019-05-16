import axios from 'axios';

export default {
    data() {
        return {
            data: {
                email: null
            },
            errors: {},
            message: null
        }
    },
    methods: {
        submit(event) {
            this.errors = {};
            axios.post(laroute.action('password-reset-request'), this.data).then(response => {
                event.target.reset();

            }).catch(error => {
                if (error.response && error.response.data) {
                    this.errors = error.response.data.errors || {};
                    this.message = error.response.data.message || null;
                }
            });
        },
    },
}