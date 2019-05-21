<template>
        <div class="wrapper">
            <div id="chat" style="max-height: 200px;overflow-y: scroll;">
                <p v-for="message in messages">{{ message }}</p>
            </div>
            <input v-model="text">
            <button @click="postMessage" :disabled="!contentExists">submit</button>
        </div>
</template>
<script>

    import axios from 'axios';
    import store from '../../../store';

    export default {
        data() {
            return {
                text: '',
                messages: []
            }
        },
        computed: {
            contentExists() {
                return this.text.length > 0;
            }
        },
        methods: {
            postMessage() {
                axios.post('/api/chat/save', {message: this.text}).then(({data}) => {
                    this.messages.push(data);
                    this.text = '';
                });
            }
        },
        created() {
            axios.post('/api/chat').then(({data}) => {
                this.messages = data;
            });
            let user = JSON.parse(store.state.user);

            window.Echo.private('channel.5').listen('.message-sent', ({message}) => {
                console.log(message);
                this.messages.push(message);

                let element = document.getElementById('chat');
                element.scrollTop = element.scrollHeight - element.clientHeight;
            });
        }
    }
</script>
