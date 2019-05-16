<template>
    <div class="flex-center position-ref full-height">
        <div class="content container">

            <div class="title m-b-md">
                <router-link :to="{ name: 'home' }">Laravel</router-link>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>