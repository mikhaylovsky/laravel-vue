<template>
    <div class="row">
        <div class="login col-4 ml-auto mr-auto">
            <div class="card">
                <div class="card-header">
                    <h2>Sign In</h2>
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
                            <router-link :to="{ name: 'password-reset-request' }">Forgot your password?</router-link>
                        </div>

                        <div class="form-group text-left">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="remember-me" name="remember">
                                <label class="form-check-label" for="remember-me">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div class="text-right">
                            <button type="submit" class="btn btn-outline-primary">Login</button>
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

<script src="./login.js"></script>