<script setup>
import FooterSection from '../components/FooterSection.vue';
import TopnavSection from '../components/TopnavSection.vue';

let items = 0
</script>

<template>
    <!-- Header and Navigation Section -->
    <TopnavSection />

         <!-- Hero page -->
    <section class="flex flex-col justify-center items-center h-fit rounded-md medvax-bg-lightblue medvax-text-deepblue m-8 gap-y-10 p-32 text-center">
        <img src="../assets/logo-footer-BYjAwJzc.svg" alt="medvax logo" class="h-10 w-auto" />
        <h1 class="text-4xl font-normal">MedVax Health E-Pharmacy</h1>
        <p>Place orders, pick up your orders or have them delivered to you.</p>
    </section>


     <!-- Checkout section -->
      <!-- Ready to checkout Section -->
    <div
      class="flex justify-between items-center p-12 rounded-md mx-10 my-14 relative medvax-text-deepblue medvax-bg-lightblue"
    >
      <div class="flex flex-col w-2/3">
        <h1 class="text-lg font-bold">
          Ready to checkout?
        </h1>
        <p class="text-md font-medium">
          Complete your order and proceed to secure payment. We offer multiple payment options for your convenience.
        </p>
      </div>
      <button class="rounded-md h-fit w-fit px-4 py-3 medvax-bg-blue medvax-text-deepblue font-medium">
        checkout (<input v-model="items" placeholder="0" class="w-[24px] text-center" />)
      </button>
    </div>

    <!-- Footer Section -->
     <FooterSection />

</template>