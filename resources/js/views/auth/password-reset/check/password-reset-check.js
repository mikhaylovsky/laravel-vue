import axios from 'axios';

export default {
    data() {
        return {
            uid: this.$route.params.uid,
            data: {
                password: null,
                password_confirmation: null
            },
            error: null,
            success: null,
            errors: {}
        }
    },
    mounted() {
        this.error = null;
        axios.post(laroute.action('password-reset-check'), {token: this.uid})
            .catch(error => {
            if (error.response && error.response.data) {
                this.error = error.response.data.error || null;
            }
        });
    },
    methods: {
        submit(event) {
            this.errors = {};
            this.error = null;
            this.success = null;

            axios.post(laroute.action('password-reset-confirm'), {...this.data, ...{token: this.uid} }).then(response => {
                event.target.reset();

                this.error = response.data.error || null;
                this.success = response.data.success || null;
            }).catch(error => {
                if (error.response.status === 400) {
                    this.errors = error.response.data.errors || {};
                }
            });
        },
    },
}