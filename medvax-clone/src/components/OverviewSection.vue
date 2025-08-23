<template>
      <!-- Overview Section -->
    <section
      class="flex flex-col justify-center bg-white gap-5 w-full mt-10"
    >
      <div class="flex flex-col gap-5 w-full justify-center items-center">
        <h1 class="text-5xl font-bold medvax-text-deepblue text-black m-6">Overview</h1>
        <p class="text-base font-normal text-black w-1/2 text-center">
          At <span class="font-semibold">MedVax Health</span>, we are redefining
          healthcare accessibility through technology and data-driven logistics.
          OUr mission is to ensure that no one is left behind in accessing
          essential healthcare services, especially women, girls, and
          under-served communities.
        </p>
      </div>
      <div class="flex w-full justify-center items-center flex-wrap gap-10">
        <div
          class="p-4 flex flex-col rounded-md medvax-bg-lightblue shadow shadow-[blue] hover:medvax-bg-deepblue"
        >
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/hp.svg"
              class="h-[70px] w-[70px] p-4 rounded medvax-bg-blue border object-cover"
            />
            <p class="text-lg text-black font-bold">Technology-Driven</p>
          </div>
          <p class="text-md text-black font-thin">
            We harness AI, data, and digital health tools to enhance healthcare
            delivery
          </p>
        </div>
        <div
          class="p-4 flex flex-col rounded-md medvax-bg-lightblue shadow shadow-[blue] hover:bg-[blue]"
        >
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/hp.svg"
              class="h-[70px] w-[70px] p-4 rounded medvax-bg-blue border object-cover"
            />
            <p class="text-lg text-black font-bold">
              Patient-Centered Approach
            </p>
          </div>
          <p class="text-md text-black font-thin">
            Our solutions are tailored to individual and community health needs.
          </p>
        </div>
        <div
          class="p-4 flex flex-col rounded-md medvax-bg-lightblue shadow shadow-[blue] hover:bg-[blue]"
        >
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/hp.svg"
              class="h-[70px] w-[70px] p-4 medvax-bg-blue rounded pee border object-cover medvax-blue"
            />
            <p class="text-lg text-black font-bold">Reliable Supply Chain</p>
          </div>
          <p class="text-md text-black font-thin">
            We ensure the continuous availability of essential medications and
            vaccines
          </p>
        </div>
        <div
          class="p-4 flex flex-col rounded-md medvax-bg-lightblue shadow shadow-[blue] hover:bg-blue-300"
        >
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/hp.svg"
              class="h-[70px] w-[70px] p-4 medvax-bg-blue rounded med border object-cover"
            />
            <p class="text-lg text-black font-bold">Impact Focused</p>
          </div>
          <p class="text-md text-black font-thin">
            Committed to closing heathcare gaps for under-served populations
          </p>
        </div>
      </div>
    </section>
</template>