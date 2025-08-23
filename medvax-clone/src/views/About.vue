<script setup>
import FooterSection from '../components/FooterSection.vue'
import ImpactSection from '../components/ImpactSection.vue'
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
      class="flex flex-col justify-center bg-white w-full mb-28"
    >
      <div class="flex flex-col w-full justify-center items-center mt-8">
        <h1 class="text-5xl font-medium medvax-text-deepblue text-black">Why Choose Medvax Health?</h1>
      </div>
      <div class="grid grid-cols-2 gap-40 w-full p-14">
        <div class="flex flex-col relative"> <!-- Card 1 -->
            <p class="text-8xl font-bold medvax-text-deepblue">01</p>
             <div
          class="p-8 flex flex-col rounded-md medvax-bg-lightblue shadow shadow-[blue] medvax-text-deepblue gap-y-2 absolute top-20">
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/tech-driven.svg"
              class="h-12 w-12 p-2.5 rounded medvax-bg-blue object-contain"
            />
            <p class="text-lg font-bold">Technology-Driven</p>
          </div>
          <p class="text-sm font-normal">
            We harness AI, data, and digital health tools to enhance healthcare
            delivery
          </p>
         </div>
        </div>
       
        <div class="flex flex-col relative"><!-- Card 2 -->
            <p class="text-8xl font-bold medvax-text-deepblue">02</p>
             <div
          class="p-8 flex flex-col rounded-md medvax-bg-lightblue shadow shadow-[blue] medvax-text-deepblue gap-y-2 absolute top-20">
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
          <p class="text-sm font-normal">
            Our solutions are tailored to individual and community health needs.
          </p>
        </div>
        </div>
       
        <div class="flex flex-col relative"><!-- Card 3 -->
            <p class="text-8xl font-bold medvax-text-deepblue">03</p>
             <div
          class="p-8 flex flex-col rounded-md medvax-bg-lightblue shadow shadow-[blue] medvax-text-deepblue gap-y-2 absolute top-20"
        >
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/reliable-supply.svg"
              class="h-12 w-12 p-2.5 medvax-bg-blue rounded object-contain medvax-blue"
            />
            <p class="text-lg font-bold">Reliable Supply Chain</p>
          </div>
          <p class="text-sm font-normal">
            We ensure the continuous availability of essential medications and
            vaccines
          </p>
        </div>
        </div>
       
        <div class="flex flex-col relative"><!-- Card 4 -->
            <p class="text-8xl font-bold medvax-text-deepblue">04</p>
            <div
          class="p-8 flex flex-col rounded-md medvax-bg-lightblue shadow shadow-[blue] medvax-text-deepblue gap-y-2 absolute top-20 "
        >
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/impact-focused.svg"
              class="h-12 w-12 p-2.5 medvax-bg-blue rounded object-contain"
            />
            <p class="text-lg font-bold">Impact Focused</p>
          </div>
          <p class="text-sm font-normal">
            Committed to closing heathcare gaps for under-served populations
          </p>
        </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
     <ImpactSection />

     <!-- Team of experts -->
     <!-- Hero page -->
    <section class="flex flex-col justify-center items-center h-fit rounded-md medvax-bg-lightblue medvax-text-deepblue m-8 pt-20 gap-y-10 text-center">
        <img src="../assets/logo-footer-BYjAwJzc.svg" alt="medvax logo" class="h-10 w-auto" />
        <h1 class="text-4xl font-normal">Our Team of Experts</h1>
        <p class="px-32">Our team combines a decade of experience in Healthcare (Pharmaceutical care), Technology, and Logistics to drive growth in emerging markets. "At MedVax Health, we are committed to leveraging technology in bridging health equity gaps in Africa."
        <span class="block">- Chioma Uzoma</span></p>
        <div class="flex justify-center items-center p-5 medvax-bg-deepblue gap-x-6 w-full rounded-bl-md rounded-br-md">
          <button class="px-2 py-3 rounded-md border-1 border-white text-white">Social Media</button>
          <button class="px-2 py-3 rounded-md border-1 border-white text-white">Mangament</button>
        </div>
    </section>
    <!-- Personnel (CEO) -->
    <div class="flex flex-col w-fit my-18 mx-8 rounded-lg relative">
      <img alt="personnel" src="../assets/hp.svg" class="h-90 w-75 border rounded-xl" />
      <div class="flex flex-col rounded-tr-lg medvax-bg-lightred w-fit py-6 px-3 absolute bottom-[-30px] left-0">
        <p class="block font-medium text-xl">Chioma Favour Uzoma</p>
        <p class="block font-medium">Chief Executive Officer</p>
      </div>
    </div>

    <!-- Join us in Revolutionizing HealthCare -->
      <!-- Get a consultant Section -->
    <div
      class="flex justify-between items-center p-12 rounded-md mx-10 my-14 relative medvax-text-deepblue medvax-bg-lightblue"
    >
      <div class="flex flex-col w-2/3">
        <h1 class="text-lg font-bold">
          Join Us in Revolutionizing Healthcare
        </h1>
        <p class="text-md font-medium">
          Through innovation, strategic partnerships, and community-driven solutions, we are building the future of accessible, affordable, and equitable healthcare in Africa. At MedVax Health, we believe that healthcare is a fundamental right, not a privilege.
        </p>
      </div>
      <button class="rounded-md h-fit w-fit px-4 py-3 medvax-bg-blue medvax-text-deepblue font-medium">
        Join Us
      </button>
    </div>

    <!-- Footer Section -->
     <FooterSection />

</template>