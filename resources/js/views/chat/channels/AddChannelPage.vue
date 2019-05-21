<template>
    <div class="row">
        <div class="login col-4 ml-auto mr-auto">
            <div class="card">
                <div class="card-header">
                    <h2>Create new channel</h2>
                </div>
                <div class="card-body">
                    <div v-if="(Object.keys(errors).length !== 0 || message !== null)">
                        <div class="alert alert-danger">
                            <span v-if="(message !== null)">{{ message }}</span>
                            <span v-else>This form contains errors!</span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>

                    <form method="post" @submit.prevent="submit">
                        <div class="form-group text-left">
                            <label for="name">Channel Name</label>
                            <input type="text" id="name" class="form-control" v-model="data.name"
                                   v-bind:class="{'is-invalid': errors.name }">
                            <ul v-if="errors.name" class="invalid-feedback pl-3">
                                <li v-for="error in errors.name">
                                    {{ error }}
                                </li>
                            </ul>
                        </div>

                        <div class="form-group text-left">
                            <label for="users-count">Count of Users</label>
                            <input type="number" id="users-count" class="form-control"
                                   v-model="data.usersCount"
                                   v-bind:class="{'is-invalid': errors.usersCount }">
                            <ul v-if="errors.usersCount" class="invalid-feedback pl-3">
                                <li v-for="error in errors.usersCount">
                                    {{ error }}
                                </li>
                            </ul>
                        </div>

                        <div class="text-right">
                            <button type="submit" class="btn btn-outline-primary">Create</button>
                        </div>
                    </form>
                </div>

                <div class="card-footer">
                    <span>Have you changed your mind?</span>
                    <router-link :to="{ name: 'channels' }">Get Back</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: {
                    name: null,
                    usersCount: 0
                },
                errors: {}
            }
        }
    }
</script>