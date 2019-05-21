<template>
    <div class="card">
        <div class="card-header">
            <h4>Available chat rooms</h4>
        </div>

        <div class="card-body">
            <div class="row">
                <div class="list-group mt-2 mb-4 col-6 mr-auto ml-auto" v-if="Object.keys(channels).length !== 0">
                    <router-link v-for="channel in channels" v-bind:key="channel.id"
                                 class="list-group-item list-group-item-action"
                                 :to="{ name: 'channel', params: { channel_id: channel.id } }" target='_blank'>
                        {{ channel.name}} ({{ channel.countUsers }}/{{ channel.maxUsers }})
                    </router-link>
                </div>
                <div class="alert alert-info mr-auto ml-auto" v-else>
                    <span>There are no active chat channels for this moment!</span>
                </div>
            </div>
            <div class="text-right">
                <router-link class="btn btn-outline-primary" :to="{ name: 'add-channel' }">Create New</router-link>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                channels: [
                    {
                        id: 1,
                        name: 'test',
                        countUsers: 2,
                        maxUsers: 5
                    }
                ]
            }
        },

        mounted() {
            window.axios.post(laroute.action('channel-get-all')).then(response => {
                this.data.channels = response.data.channels || {};
            }).catch(error => {

            });
        }
    }
</script>