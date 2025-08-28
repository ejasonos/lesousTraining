<script setup>
import BlogSection from '../components/BlogSection.vue'
import ConsultantSection from '../components/ConsultantSection.vue'
import FooterSection from '../components/FooterSection.vue'
import ImpactSection from '../components/ImpactSection.vue'
import IntroSection from '../components/IntroSection.vue'
import OverviewSection from '../components/OverviewSection.vue'
import PartnersSection from '../components/PartnersSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import TopnavSection from '../components/TopnavSection.vue'
</script>
<template>
    <!-- Header and Navigation Section -->
     <TopnavSection />
    <!-- Introductory Section -->
     <IntroSection />
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
     <FooterSection /> <!-- The default position of the footer is "position: static; bottom: 0;"-->
</template>