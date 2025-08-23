<script setup>
import FooterSection from '../components/FooterSection.vue';
import TopnavSection from '../components/TopnavSection.vue';
</script>

<template>
    <!-- Header and Navigation Section -->
    <TopnavSection />
     <!-- Team of experts -->
    <section class="flex flex-col justify-center items-center h-fit rounded-md medvax-bg-lightblue medvax-text-deepblue m-8 pt-20 gap-y-10 text-center">
        <img src="../assets/logo-footer-BYjAwJzc.svg" alt="medvax logo" class="h-10 w-auto" />
        <h1 class="text-4xl font-normal">Our Blog</h1>
        <p class="px-32">Stay updated with the latest in healthcare technology, pharmaceutical care, reproductive health, and MedVax Health's impact in Africa.</p>
        <div class="flex justify-center items-center p-5 medvax-bg-deepblue gap-x-6 w-full rounded-bl-md rounded-br-md">
          <button class="px-3.5 py-3 rounded-md border-1 border-white text-white bg-[gray]">All</button>
          <button class="px-2 py-3 rounded-md border-1 border-white text-white">Reproductive Health</button>
        </div>
    </section>

     <!-- Our Blog Section -->
    <section class="flex flex-col m-8 medvax-text-deepblue gap-y-10">
      <!-- List of card items -->
      <div class="flex">
        <div class="flex flex-col w-[400px] border-[skyblue] border-2 px-3 py-6 gap-y-2 rounded-sm medvax-bg-lightblue">
          <img
          alt="safe sex"
          src="../assets/safe_sex.png"
          class="h-32 w-full overflow-hidden"/>
          <div class="flex flex-col gap-3">
            <h1 class="text-lg font-bold">
                Safe Sex Goes Beyond Condoms -- 5...
                <span class="text-xs text-[gray] block font-extralight">Reproductive health</span>
            </h1>
            <p class="text-md font-normal">
                When it comes to safe sex, condoms are just the beginning. True protection means being informed...
            </p>
            <button class="w-full text-center p-1 rounded-sm text-white font-normal medvax-bg-blue">Read more</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
     <FooterSection />
</template>