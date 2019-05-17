import axios from 'axios';

export default {
    data() {
        return {
            data: {
                id: null,
                name: null,
                email: null,
                password: null,
                old_password: null,
                password_change: null,
                password_confirmation: null
            },
            errors: {},
            errorMessage: null,
            successMessage: null
        }
    },
    mounted() {
        axios.get(laroute.action('my-account')).then(response => {
            this.data.id = response.data.id || null;
            this.data.name = response.data.name || null;
            this.data.email = response.data.email || null;
        });
    },
    methods: {
        showPasswordField(event) {
            let field = document.getElementById('password-change');

            if (event.target.checked) {
                field.classList.remove('d-none');
            } else {
                field.classList.add('d-none');
            }
        },
        submit() {
            this.errors = {};
            this.errorMessage = null;
            this.successMessage = null;
            axios.put(laroute.action('update-account'), this.data).then(response => {
                this.errorMessage = response.data.error || null;
                this.successMessage = response.data.success || null;

                this.data = {...this.data, ...response.data.user };

                this.data.old_password = null;
                this.data.password = null;
                this.data.password_confirmation = null;
            }).catch(error => {
                if (error.response.data.errors || error.response.data.error) {
                    this.errors = error.response.data.errors || {};
                    this.errorMessage = error.response.data.error || null;
                }
            });
        }
    }
}