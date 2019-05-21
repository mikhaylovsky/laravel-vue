<template>
    <div class="container">
        <div class="links mb-5">
            <router-link :to="{ name: 'home' }">Homepage</router-link>
            <router-link :to="{ name: 'user' }">Personal account</router-link>
            <router-link :to="{ name: 'channels' }">Channels</router-link>
        </div>

        <router-view></router-view>
    </div>
</template>