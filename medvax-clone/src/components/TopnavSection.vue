<template>
    <!-- Header Section -->
    <header
      class="flex justify-center items-center w-full p-4 text-white text-center text-xl medvax-bg-blue gap-x-1">
      <img
        alt="hp icon"
        src="../assets/pink-icon.svg"
        class="h-5 w-5"
      />
      Join the Movement - Be a Part of the Future of HealthCare
    </header>
    <nav id="topnav" class="flex w-full px-8  py-4 justify-between medvax-bg-deepblue">
      <div class="flex w-1/2 items-center">
        <img
          alt="Medvax logo"
          src="../assets/logo-nav-B7kw0cn7.svg"
          class="h-[45px] w-auto"/>
      </div>
      <div class="flex w-1/2 float-right items-center">
        <img alt="Menu" src="../assets/unfpa.svg" class="hidden h-[50px] w-auto" />
        <ul class="flex list-none w-full justify-around hover:cursor-default">
          <li>
            <router-link v-bind:to="{name: 'Home'}" class="text-white hover:medvax-text-blue transform-none">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="text-white hover:medvax-text-blue transform-none"
              >About</router-link>
          </li>
          <li>
            <router-link to="/innovation" class="text-white hover:medvax-text-blue transform-none"
              >Innovation</router-link>
          </li>
          <li>
            <router-link to="/epharmacy" class="text-white hover:medvax-text-blue transform-none"
              >E-Pharmacy</router-link>
          </li>
          <li>
            <router-link to="/blog" class="text-white hover:medvax-text-blue transform-none"
              >Blog</router-link>
          </li>
          <li>
            <router-link to="/contactus"
              class="rounded px-4 py-2 text-white medvax-bg-blue hover:medvax-bg-blue transform-none"
              >Contact Us</router-link>
          </li>
        </ul>
      </div>
   </nav>
</template>