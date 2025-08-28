<script setup>
// pass a prop for placing footer for each page
defineProps ({
  placed: {
    type: String,
    default: 'static bottom-0'
  }
})
</script>

<template>
    <!-- Footer Section -->
    <footer v-bind:class="[placed, 'flex flex-col medvax-bg-blue py-6 px-14 gap-y-5']">
      <section class="flex justify-between items-center">
        <img
          src="../assets/logo-footer-BYjAwJzc.svg"
          alt="MedVax logo"
          class="h-12 w-auto"
        />
        <ul class="flex list-none w-fit gap-x-6 justify-around hover:cursor-default">
          <li>
            <router-link v-bind:to="{name: 'Home'}" class="text-white font-medium hover:text-blue-300">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="text-white font-medium hover:text-blue-300 transform-none"
              >About</router-link>
          </li>
          <li>
            <router-link to="/innovation" class="text-white font-medium hover:text-blue-300 transform-none"
              >Innovation</router-link>
          </li>
          <li>
            <router-link to="/epharmacy" class="text-white font-medium hover:text-blue-300 transform-none"
              >E-Pharmacy</router-link>
          </li>
          <li>
            <router-link to="/blog" class="text-white font-medium hover:text-blue-300 transform-none"
              >Blog</router-link>
          </li>
          <li>
            <router-link to="/contactus"
              class="rounded px-4 py-2 text-white font-medium medvax-bg-blue hover:text-blue-300 transform-none"
              >Contact Us</router-link>
          </li>
        </ul>
        <li to="#topOfPage" class="flex items-center gap-x-1 decoration-none text-white m-3 text-sm">
            Go to top
            <span
              class="h-5 w-5 medvax-bg-deepblue rounded-full flex justify-center items-center"
              ><img
                src="../assets/arrow-up.svg"
                alt="Top"
                class="h-full w-full object-cover text-white"
            /></span>
          </li>
      </section>
      <section class="rounded p-4  medvax-bg-deepblue flex justify-between items-center">
        <div class="w-2/3 flex flex-wrap gap-2.5">
          <button
            class="p-1 rounded-md border-[#079FCE] border-1 text-md text-white flex items-center"
          >
            <img
              src="../assets/inbox.svg"
              alt="icon"
              class="h-5 w-5 mx-1"
            />info@medvaxhealth.com
          </button>
          <button
            class="p-1 rounded-md border-[#079FCE] border-1 text-md text-white flex items-center"
          >
            <img
              src="../assets/phone.svg"
              alt="icon"
              class="h-5 w-5 mx-1"
            />+234 912 973 8935
          </button>
          <button
            class="p-1 rounded-md border-[#079FCE] border-1 text-md text-white flex items-center"
          >
            <img
              src="../assets/location.svg"
              alt="icon"
              class="h-5 w-5 mx-1"
            />FCT, Abuja, Nigeria
          </button>
          <button
            class="p-1 rounded-md border-[#079FCE] border-1 text-md text-white flex items-center"
          >
            <img
              src="../assets/linkedin.svg"
              alt="icon"
              class="h-5 w-5 mx-1"
            /><img
              src="../assets/x.svg"
              alt="partners logo"
              class="h-5 w-5 mx-1"
            />
          </button>
        </div>
        <div class="w-1/3 text-right text-md text-white">
          &copy; 2025 MedVax Health. All rights reserved
        </div>
      </section>
    </footer>
</template>
