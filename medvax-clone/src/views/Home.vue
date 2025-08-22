<script setup>
import BlogSection from '../components/BlogSection.vue'
import ConsultantSection from '../components/ConsultantSection.vue'
import FooterSection from '../components/FooterSection.vue'
import ImpactSection from '../components/ImpactSection.vue'
import OverviewSection from '../components/OverviewSection.vue'
import PartnersSection from '../components/PartnersSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import TopnavSection from '../components/TopnavSection.vue'
</script>
<template>
    <!-- Header and Navigation Section -->
    <TopnavSection />
    <!-- Hero page Sections-->
    <section class="grid lg:grid-cols-2 bg-white 2xl:px-60">
      <div class="h-[500px] w-full rounded p-4">
        <img
          alt="Doctors"
          src="../assets/onboarding-dual-Dl6c82fL.svg"
          class="h-full w-full overflow-hidden object-cover"
        />
      </div>
      <article class="flex flex-col justify-center gap-5">
        <p
          class="text-md text-black font-medium underline underline-offset-[7px] decoration-3 decoration-[orange]"
        >
          Operational in Nigeria - Expanding across Africa
        </p>
        <div class="flex flex-col gap-5">
          <h1 class="text-7xl text-black font-bold">
            Transforming Medication Access Through Innovation
          </h1>
          <p class="text-md text-black font-medium">
            Bridging healdthcare gaps with low-cost technology, AI-powered
            supply chains, and last-mile delivery solutions to ensure
            life-saving medications, vaccines, and reproductive health products
            reach those who need them the most.
          </p>
        </div>
        <div class="flex gap-5">
          <button
            class="px-6 py-4 rounded-lg text-md text-white bg-[orange] hover:bg-[orangered] shadow"
          >
            Book a Consultation
          </button>
          <button
            class="px-6 py-4 rounded-lg text-md text-white bg-[orange] hover:bg-[orange] shadow"
          >
            Download Our App
          </button>
          <button
            class="px-6 py-4 rounded-lg text-md text-white bg-[orange] hover:bg-[orange] shadow"
          >
            Visit Our E-Pharmacy
          </button>
        </div>
      </article>
    </section>
    <!-- Overview Section -->
     <OverviewSection />
    
    <!-- Services Section -->
     <ServicesSection />
  
    <!-- Impact Section -->
    <ImpactSection />

    <!-- Blog Section -->
     <BlogSection />

    <!-- Partners section -->
     <PartnersSection />

    <!-- Get a consultant -->
     <ConsultantSection />

    <!-- Footer Section -->
     <FooterSection />
</template>