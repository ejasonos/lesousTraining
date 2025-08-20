<script setup>
</script>

<template>
  <nav>
    <router-link to="/" class="px-3 py-2 rounded-md">Home</router-link>
    <router-link to="/about" class="px-3 py-2 rounded-md text-amber-700 bg-purple-500">About</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
.router-link-exact-active {
  background-color: #acfa36;
}
</style>
