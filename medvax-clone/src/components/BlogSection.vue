<template>
     <!-- Our Blog Section -->
    <section class="w-full flex flex-col pt-24 p-14 medvax-text-deepblue gap-y-10">
        <!-- Title of the section -->
      <div class="flex flex-col gap-5 w-full justify-center items-center">
        <h1 class="text-5xl font-bold">Our Blog</h1>
        <p class="text-xl font-light w-2/3 text-center">
          Stay Updated with Healthcare Innovations. Explore the latest in
          healthcare technology, pharmaceutical care, and reporoductive health.
        </p>
      </div>
      <!-- List of card items -->
      <div class="flex w-full">
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
</template>