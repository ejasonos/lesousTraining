<script setup>
import FooterSection from '../components/FooterSection.vue';
import ServicesSection from '../components/ServicesSection.vue'
import TopnavSection from '../components/TopnavSection.vue';
</script>

<template>
    <!-- Header and Navigation Section -->
    <TopnavSection />

     <!-- Hero page -->
    <section id="topOfPage" class="flex flex-col justify-center items-center h-fit rounded-md medvax-bg-lightblue medvax-text-deepblue m-8 gap-y-10 px-32 py-14 text-center">
        <img src="../assets/logo-footer-BYjAwJzc.svg" alt="medvax logo" class="h-10 w-auto" />
        <h1 class="text-4xl font-normal">Our Innovation</h1>
        <p>Explore a suite of MedVax Health products tailored to provide cutting edge healthcare services, even in remote and underserved communities.</p>
    </section>

    <!-- Innovations -->
     <ServicesSection bgColor="medvax-bg-lightblue" />

    <!-- Footer Section -->
     <FooterSection />
</template>