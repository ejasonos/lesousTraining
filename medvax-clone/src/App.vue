<script setup>
</script>

<template>
  <nav class="flex justify-center m-4 gap-x-1">
    <router-link to="/" class="px-3 py-2 rounded-md">Home</router-link>
    <router-link to="/about" class="px-3 py-2 rounded-md">About</router-link>
    <router-link to="/innovation" class="px-3 py-2 rounded-md">Innovation</router-link>
    <router-link to="/epharmacy" class="px-3 py-2 rounded-md">E-pharmacy</router-link>
    <router-link to="/blog" class="px-3 py-2 rounded-md">Blog</router-link>
    <router-link to="/contactus" class="px-3 py-2 rounded-md">Contact Us</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
.router-link-exact-active {
  background-color: #acfa36;
}
</style>
