<template>
    <div class="w-100">
        <div class="row">
            <div class="links mb-5 mr-auto ml-auto">
                <router-link :to="{ name: 'home' }">Homepage</router-link>
                <router-link :to="{ name: 'account' }">Information</router-link>
                <router-link :to="{ name: 'logout' }">Sign out</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-4 mr-auto ml-auto">
                <div class="card">
                    <div class="card-header">
                        <h4>My information</h4>
                    </div>
                    <div class="card-body">
                        <div v-if="(Object.keys(errors).length !== 0 || errorMessage !== null)">
                            <div class="alert alert-danger">
                                <span v-if="(errorMessage !== null)">{{ errorMessage }}</span>
                                <span v-else>This form contains errors!</span>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>

                        <div v-if="(successMessage !== null)">
                            <div class="alert alert-success">
                                <span>{{ successMessage }}</span>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>

                        <form method="post" @submit.prevent="submit">
                            <div class="form-group text-left">
                                <label for="email">Email</label>
                                <input type="email"
                                       id="email"
                                       class="form-control"
                                       v-model="data.email"
                                       v-bind:class="{'is-invalid': errors.email }">
                                <ul v-if="errors.email" class="invalid-feedback pl-3">
                                    <li v-for="error in errors.email">
                                        {{ error }}
                                    </li>
                                </ul>
                            </div>

                            <div class="form-group text-left">
                                <label for="name">Name</label>
                                <input type="text"
                                       id="name"
                                       class="form-control"
                                       v-model="data.name"
                                       v-bind:class="{'is-invalid': errors.name }">
                                <ul v-if="errors.name" class="invalid-feedback pl-3">
                                    <li v-for="error in errors.name">
                                        {{ error }}
                                    </li>
                                </ul>
                            </div>

                            <div class="form-group text-left">
                                <div class="form-check">
                                    <input class="form-check-input"
                                           type="checkbox"
                                           id="change-password"
                                           v-model="data.password_change"
                                           @change="showPasswordField">
                                    <label class="form-check-label" for="change-password">
                                        Change Password
                                    </label>
                                </div>
                            </div>

                            <div id="password-change" class="d-none">
                                <div class="form-group text-left">
                                    <label for="old-password">Enter Your Password</label>
                                    <input type="password"
                                           id="old-password"
                                           class="form-control"
                                           v-model="data.old_password"
                                           v-bind:class="{'is-invalid': errors.old_password }">
                                    <ul v-if="errors.old_password" class="invalid-feedback pl-3">
                                        <li v-for="error in errors.old_password">
                                            {{ error }}
                                        </li>
                                    </ul>
                                </div>

                                <div class="form-group text-left">
                                    <label for="password">New Password</label>
                                    <input type="password"
                                           id="password"
                                           class="form-control"
                                           v-model="data.password"
                                           v-bind:class="{'is-invalid': errors.password }">
                                    <ul v-if="errors.password" class="invalid-feedback pl-3">
                                        <li v-for="error in errors.password">
                                            {{ error }}
                                        </li>
                                    </ul>
                                </div>

                                <div class="form-group text-left">
                                    <label for="password_confirmation">Confirm new Password</label>
                                    <input type="password"
                                           id="password_confirmation"
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

                            <div class="text-right">
                                <button type="submit" class="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script src="./my-account.js"></script>