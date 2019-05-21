<template>
    <div class="container">
        <div class="links mb-5">
            <router-link :to="{ name: 'home' }">Homepage</router-link>
            <router-link :to="{ name: 'my-account' }">Information</router-link>
            <router-link :to="{ name: 'chat' }">Chat</router-link>
            <router-link :to="{ name: 'logout' }">Sign out</router-link>
        </div>
    </div>
</template>