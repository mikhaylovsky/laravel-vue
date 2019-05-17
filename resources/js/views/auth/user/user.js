import axios from 'axios';

export default {
    mounted() {
        axios.post(laroute.action('get-user'));
    }
}