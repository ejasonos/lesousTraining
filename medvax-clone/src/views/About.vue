<script setup>
import TopnavSection from '../components/TopnavSection.vue';
</script>

<template>
    <!-- Header and Navigation Section -->
    <TopnavSection />

    <!-- Hero page -->
    <section class="flex flex-col justify-center items-center h-[70vh] rounded-md medvax-bg-lightblue medvax-text-deepblue m-8 gap-y-10 p-32 text-center">
        <img src="../assets/logo-footer-BYjAwJzc.svg" alt="medvax logo" class="h-10 w-auto" />
        <h1 class="text-4xl font-normal">Who we are</h1>
        <p>MedVax Health is a health technology company on a mission to bridge healthcare gaps through low-cost technology, resilient anti-counterfeit supply chains, and last-mile delivery solutions. We ensure that regardless of geographical barriers, climate disruptions and fragmented healthcare supply chains, life-saving medications, vaccines, and reproductive health products reach the most vulnerable communities, and those who need them most, with a special commitment to bridging the health equity gap for women and girls. We are currently operational in Nigeria, with a vision to expand across Africa.</p>
    </section>

      <!-- Overview Section -->
    <section
      class="flex flex-col justify-center bg-white w-full"
    >
      <div class="flex flex-col w-full justify-center items-center mt-8 mb-24">
        <h1 class="text-5xl font-medium medvax-text-deepblue text-black">Why Choose Medvax Health?</h1>
      </div>
      <div class="flex w-full justify-center items-center flex-wrap gap-10">
        <div class="flex flex-col"> <!-- Card 1 -->
            <p>01</p>
             <div
          class="p-8 flex flex-col rounded-md medvax-bg-lightblue shadow shadow-[blue] medvax-text-deepblue gap-y-2">
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/tech-driven.svg"
              class="h-12 w-12 p-2.5 rounded medvax-bg-blue object-contain"
            />
            <p class="text-lg font-bold">Technology-Driven</p>
          </div>
          <p class="text-md font-thin">
            We harness AI, data, and digital health tools to enhance healthcare
            delivery
          </p>
         </div>
        </div>
       
        <div class="flex flex-col"><!-- Card 2 -->
            <p>02</p>
             <div
          class="p-8 flex flex-col rounded-md medvax-bg-lightblue shadow shadow-[blue] medvax-text-deepblue gap-y-2">
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/patient-centered.svg"
              class="h-12 w-12 p-2.5 rounded medvax-bg-blue object-contain"
            />
            <p class="text-lg font-bold">
              Patient-Centered Approach
            </p>
          </div>
          <p class="text-md font-thin">
            Our solutions are tailored to individual and community health needs.
          </p>
        </div>
        </div>
       
        <div><!-- Card 3 -->
            <p>03</p>
             <div
          class="p-8 flex flex-col rounded-md medvax-bg-lightblue shadow shadow-[blue] medvax-text-deepblue gap-y-2"
        >
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/reliable-supply.svg"
              class="h-12 w-12 p-2.5 medvax-bg-blue rounded object-contain medvax-blue"
            />
            <p class="text-lg font-bold">Reliable Supply Chain</p>
          </div>
          <p class="text-md font-thin">
            We ensure the continuous availability of essential medications and
            vaccines
          </p>
        </div>
        </div>
       
        <div
          class="p-8 flex flex-col rounded-md medvax-bg-lightblue shadow shadow-[blue] medvax-text-deepblue gap-y-2"
        >
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/impact-focused.svg"
              class="h-12 w-12 p-2.5 medvax-bg-blue rounded object-contain"
            />
            <p class="text-lg font-bold">Impact Focused</p>
          </div>
          <p class="text-md font-thin">
            Committed to closing heathcare gaps for under-served populations
          </p>
        </div>
      </div>
    </section>
</template>