<template>
    <div class="container">
        <div class="links mb-5">
            <router-link :to="{ name: 'home' }">Homepage</router-link>
            <router-link :to="{ name: 'my-account' }">Information</router-link>
            <router-link :to="{ name: 'logout' }">Sign out</router-link>
        </div>

        <div class="card">
            <div class="card-header">
                <h4>Available chat rooms</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="list-group mt-2 mb-4 col-6 mr-auto ml-auto">
                        <a href="" class="list-group-item list-group-item-action disabled">Cras justo odio (5/5)</a>
                        <a href="" class="list-group-item list-group-item-action">Dapibus ac facilisis in (0/5)</a>
                        <a href="#" class="list-group-item list-group-item-action">Morbi leo risus (2/10)</a>
                        <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac (3/10)</a>
                        <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros (2/2)</a>
                    </div>
                </div>

                <div class="text-right">
                    <button type="button" class="btn btn-outline-primary">Create new</button>
                </div>
            </div>
        </div>
    </div>
</template>