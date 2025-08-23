<template>
    <!-- Footer Section -->
    <footer class="w-full flex flex-col medvax-bg-blue py-6 px-14 gap-y-5">
      <section class="flex w-full justify-between items-center">
        <img
          src="../assets/logo-footer-BYjAwJzc.svg"
          alt="MedVax logo"
          class="h-12 w-auto"
        />
        <ul
          class="list-none flex flex-wrap justify-between items-center w-1/2"
        >
          <li class="text-white m-3 text-sm">Home</li>
          <li class="text-white m-3 text-sm">About</li>
          <li class="text-white m-3 text-sm">Innovation</li>
          <li class="text-white m-3 text-sm">E-Pharmacy</li>
          <li class="text-white m-3 text-sm">Blog</li>
          <li class="text-white m-3 text-sm">Contact</li>
          <li class="text-white m-3 text-sm">Privacy</li>
        </ul>
        <router-link to="#" class="flex items-center gap-x-1 decoration-none text-white m-3 text-sm">
            Go to top
            <span
              class="h-5 w-5 medvax-bg-deepblue rounded-full flex justify-center items-center"
              ><img
                src="../assets/arrow-up.svg"
                alt="Top"
                class="h-full w-full object-cover text-white"
            /></span>
          </router-link>
      </section>
      <section class="rounded p-4  medvax-bg-deepblue flex justify-between items-center">
        <div class="w-2/3 flex flex-wrap gap-x-5">
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