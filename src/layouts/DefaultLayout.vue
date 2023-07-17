<template>
    <NavBar />
    <div class="container mt-4">
        <div class="row">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
    import { RouterView } from 'vue-router'
    import NavBar from '../components/NavBar.vue';
</script>   