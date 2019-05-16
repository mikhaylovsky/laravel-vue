import axios from 'axios';

export default {
    mounted() {
        axios.post(laroute.action('get-user')).then(response => {

        }).catch(error => {
            if (error.response.status === 400) {
                this.errors = error.response.data.errors || {};
            }
        });
    }
}