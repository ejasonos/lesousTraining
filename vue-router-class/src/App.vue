<script setup>
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="flex items-center justify-center text-xl text-[green] border w-fit text-center px-1.5 py-1 hover:text-white font-bold gap-x-2 rounded-full hover:text-black">
      <div class="h-5 w-5 rounded-full bg-[darkblue]"></div>
      Tailwindcss running successfully
    </div>
  </div>

    <nav class="flex gap-x-3 justify-center items-center py-3">
      <router-link to="/home" class="text-2xl font-bold cursor-default rounded-lg px-3 py-2.5 h-fit w-fit">Home</router-link>
      <router-link to="/contact-us" class="text-2xl font-bold rounded-lg px-3 py-2.5 h-fit w-fit cursor-default hover:bg-[orange]">Contact us</router-link>
    </nav>
    <router-view />
</template>

<style scoped>
.router-link-active {
  background-color: #6b2fce;
}
</style>
