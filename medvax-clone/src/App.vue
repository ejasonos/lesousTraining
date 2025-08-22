<script setup>
</script>

<template>
  <nav class="flex justify-center m-4 gap-x-1">
    <router-link to="/" class="px-3 py-2 rounded-md">Home</router-link>
    <router-link to="/about" class="px-3 py-2 rounded-md">About</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
.router-link-exact-active {
  background-color: #acfa36;
}
</style>
