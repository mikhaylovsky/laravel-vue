<template>
    <div v-if="store.state.isLoggedIn" class="links">
        <router-link to="/logout">Sign out</router-link>
    </div>

    <div v-else class="links">
        <router-link :to="{ name: 'login' }">Sign in</router-link>
        <router-link :to="{ name: 'register' }">Sign up</router-link>
    </div>
</template>

<script>
    import store from '../store';
    export default {
        data() {
            return {
                store: store
            }
        }
    };
</script>