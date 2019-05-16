<template>
    <div class="row">
        <div class="login col-4 ml-auto mr-auto">
            <div class="card">
                <div class="card-header">
                    <h2>Change your password</h2>
                </div>
                <div class="card-body">
                    <div v-if="(error !== null)">
                        <div class="alert alert-danger">
                            <span v-if="(error !== null)">{{ error }}</span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>

                    <div v-else-if="(success !== null)">
                        <div class="alert alert-success">
                            <span v-if="(success !== null)">{{ success }}</span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>

                    <div v-else>

                        <form method="post" @submit.prevent="submit">
                            <div class="form-group text-left">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" class="form-control"
                                       v-model="data.password"
                                       v-bind:class="{'is-invalid': errors.password }">
                                <ul v-if="errors.password" class="invalid-feedback pl-3">
                                    <li v-for="error in errors.password">
                                        {{ error }}
                                    </li>
                                </ul>
                            </div>
                            <div class="form-group text-left">
                                <label for="password_confirmation">Password Confirmation</label>
                                <input type="password" id="password_confirmation" name="password_confirmation"
                                       v-model="data.password_confirmation"
                                       class="form-control"
                                       v-bind:class="{'is-invalid': errors.password_confirmation }">
                                <ul v-if="errors.password_confirmation" class="invalid-feedback pl-3">
                                    <li v-for="error in errors.password_confirmation">
                                        {{ error }}
                                    </li>
                                </ul>
                            </div>

                            <div class="text-right">
                                <button type="submit" class="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>

                <div class="card-footer">
                    <span>No account?</span>
                    <router-link :to="{ name: 'register' }">Sign up</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./password-reset-check.js"></script>