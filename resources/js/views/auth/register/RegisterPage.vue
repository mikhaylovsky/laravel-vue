<template>
    <div class="row">
        <div class="register col-6 ml-auto mr-auto">
            <div class="card">
                <div class="card-header">
                    <h2>Sign Up</h2>
                </div>
                <div class="card-body">
                    <div v-if="(Object.keys(errors).length !== 0)">
                        <div class="alert alert-danger">
                            <span>This form contains errors!</span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <form method="post" @submit.prevent="submit">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group text-left">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" class="form-control"
                                           v-model="data.email"
                                           v-bind:class="{'is-invalid': errors.email }">
                                    <ul v-if="errors.email" class="invalid-feedback pl-3">
                                        <li v-for="error in errors.email">
                                            {{ error }}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="form-group text-left">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" class="form-control" v-model="data.name"
                                           v-bind:class="{'is-invalid': errors.name }">
                                    <ul v-if="errors.name" class="invalid-feedback pl-3">
                                        <li v-for="error in errors.name">
                                            {{ error }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
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
                            </div>

                            <div class="col-6">
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
                            </div>
                        </div>

                        <div class="text-right">
                            <button type="submit" class="btn btn-outline-primary">Register</button>
                        </div>
                    </form>
                </div>

                <div class="card-footer">
                    <span>Already have an account?</span>
                    <router-link :to="{ name: 'login' }">Sign in</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./register.js"></script>