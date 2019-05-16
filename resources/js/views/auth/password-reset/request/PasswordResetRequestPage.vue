<template>
    <div class="row">
        <div class="login col-4 ml-auto mr-auto">
            <div class="card">
                <div class="card-header">
                    <h2>Forgotten Password</h2>
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
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" class="form-control" v-model="data.email"
                                   v-bind:class="{'is-invalid': errors.email }">
                            <ul v-if="errors.email" class="invalid-feedback pl-3">
                                <li v-for="error in errors.email">
                                    {{ error }}
                                </li>
                            </ul>
                        </div>

                        <div class="text-right">
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </div>
                    </form>
                </div>

                <div class="card-footer">
                    <span>No account?</span>
                    <router-link :to="{ name: 'register' }">Sign up</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./password-reset-request.js"></script>