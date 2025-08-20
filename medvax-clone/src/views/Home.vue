<template>
    <!-- Header Section -->
    <header
      class="flex justify-center w-full p-4 text-white text-center text-xl bg-[#079FCE]"
    >
      <img
        alt="hp icon"
        src="../assets/hp.svg"
        class="h=[50px] w-[50px]"
      />
      Join the Movement - Be a Part of the Future of HealthCare
    </header>
    <nav id="topnav" class="flex w-full 2xl:px-60 py-4 justify-between bg-[blue]">
      <div class="flex w-1/2 items-center">
        <img
          alt="Medvax logo"
          src="../assets/logo-nav-B7kw0cn7.svg"
          class="h-[45px] w-auto"
        />
      </div>
      <div class="flex w-1/2 float-right items-center">
        <img alt="Menu" src="../assets/unfpa.svg" class="block xl:hidden h-[50px] w-auto" />
        <ul class="hidden xl:flex list-none w-full justify-around">
          <li><a class="text-[green] font-bold transform-none">Home</a></li>
          <li>
            <a class="text-white hover:text-[green] font-bold transform-none"
              >About</a
            >
          </li>
          <li>
            <a class="text-white hover:text-[green] font-bold transform-none"
              >Innovation</a
            >
          </li>
          <li>
            <a class="text-white hover:text-[green] font-bold transform-none"
              >E-Pharmacy</a
            >
          </li>
          <li>
            <a class="text-white hover:text-[green] font-bold transform-none"
              >Blog</a
            >
          </li>
          <li>
            <a
              class="rounded font-bold px-4 py-2 text-white bg-[green] hover:bg-[green] transform-none"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </nav>

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
    <section
      class="flex flex-col justify-center bg-white gap-5 w-full mt-28 2xl:px-60"
    >
      <div class="flex flex-col gap-5 w-full justify-center items-center">
        <h1 class="text-5xl font-bold text-black">Overview</h1>
        <p class="text-xl font-light text-black w-1/2 text-center">
          At <span class="font-semibold">MedVax Health</span>, we are redefining
          healthcare accessibility through technology and data-driven logistics.
          OUr mission is to ensure that no one is left behind in accessing
          essential healthcare services, especially women, girls, and
          under-served communities.
        </p>
      </div>
      <div class="flex w-full justify-center items-center flex-wrap gap-10">
        <div
          class="p-6 flex flex-col rounded-md bg-[blue] shadow shadow-blue-300 hover:bg-[blue]"
        >
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/hp.svg"
              class="h-[70px] w-[70px] p-4 rounded bg-[blue] border object-cover"
            />
            <p class="text-lg text-black font-bold">Technology-Driven</p>
          </div>
          <p class="text-md text-black font-thin">
            We harness AI, data, and digital health tools to enhance healthcare
            delivery
          </p>
        </div>
        <div
          class="p-6 flex flex-col rounded-md bg-blue-400 shadow shadow-[blue] hover:bg-[blue]"
        >
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/hp.svg"
              class="h-[70px] w-[70px] p-4 rounded bg-blue-300 border object-cover"
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
          class="p-6 flex flex-col rounded-md shadow shadow-[blue] hover:bg-[blue]"
        >
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/hp.svg"
              class="h-[70px] w-[70px] p-4 rounded pee border object-cover medvax-blue"
            />
            <p class="text-lg text-black font-bold">Reliable Supply Chain</p>
          </div>
          <p class="text-md text-black font-thin">
            We ensure the continuous availability of essential medications and
            vaccines
          </p>
        </div>
        <div
          class="p-6 flex flex-col rounded-md bg-blue-100 shadow shadow-blue-300 hover:bg-blue-300"
        >
          <div class="flex w-full items-center gap-x-1">
            <img
              alt="icon"
              src="../assets/hp.svg"
              class="h-[70px] w-[70px] p-4 rounded med border object-cover"
            />
            <p class="text-lg text-black font-bold">Impact Focused</p>
          </div>
          <p class="text-md text-black font-thin">
            Committed to closing heathcare gaps for under-served populations
          </p>
        </div>
      </div>
    </section>

    <!-- Our Services Section -->
    <section
      class="flex flex-wrap w-full gap-10 p-4 mt-14 justify-center items-center"
    >
      <div class="flex flex-col gap-5 w-full justify-center items-center">
        <h1 class="text-5xl font-bold text-black">Our Services</h1>
      </div>
      <div class="flex flex-col p-2 rounded bg-green-100 w-1/3">
        <img
          alt="services"
          src="../assets/medtracka-4-her-Df4Sxils.svg"
          class="h=[250px] overflow-hidden"
        />
        <div class="flex flex-col gap-5 w-full">
          <h1 class="text-lg font-bold text-black">
            MedTracka 4 Her (Her Paddi)
          </h1>
          <p class="text-md font-thin text-black">
            Women-centric e-pharmacy with discreet teleconsultations & seamless
            delivery of reproductive health products
          </p>
        </div>
      </div>
      <div class="flex flex-col p-2 rounded bg-green-100 w-1/3">
        <img
          alt="services"
          src="../assets/medtracka-CyWCPOXU.svg"
          class="h=[250px] overflow-hidden"
        />
        <div class="flex flex-col gap-5 w-full">
          <h1 class="text-lg font-bold text-black">MedTracka</h1>
          <p class="text-md font-thin text-black">
            AI-powered app connecting patients to every licensed pharmacy in
            their city, ensuring medication authentication, refills, and
            consultations
          </p>
        </div>
      </div>
      <div class="flex flex-col p-2 rounded bg-green-100 w-1/3">
        <img
          alt="services"
          src="../assets/medvax-pharmacy-C8rc04dD.svg"
          class="h=[250px] overflow-hidden"
        />
        <div class="flex flex-col gap-5 w-full">
          <h1 class="text-lg font-bold text-black">MedVax Pharmacies</h1>
          <p class="text-md font-thin text-black">
            A chain of tech-enabled community pharmacies integrating digital
            health services & fast medication delivery
          </p>
        </div>
      </div>
      <div class="flex flex-col p-2 rounded bg-green-100 w-1/3">
        <img
          alt="services"
          src="../assets/medvax-lab-hGB-yGDV.svg"
          class="h=[250px] overflow-hidden"
        />
        <div class="flex flex-col gap-5 w-full">
          <h1 class="text-lg font-bold text-black">MedVax Labs</h1>
          <p class="text-md font-thin text-black">
            Researching African indigenous plants for innovative pharmaceutical
            & reproductive health solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section
      class="flex flex-col bg-blue-700/50 p-6 pt-20 gap-10 xl:px-60 w-full"
    >
      <div class="flex flex-col gap-5 w-full justify-center items-center">
        <h1 class="text-5xl font-bold text-white">Our Impact</h1>
      </div>
      <div class="flex w-full xl:justify-between gap-10 flex-wrap">
        <div
          class="rounded p-4 w-1/5 h-fit flex flex-col gap-y-2.5 bg-green-50 justify-center"
        >
          <h1 class="text-3xl text-pink-600 font-bold">4500+</h1>
          <div class="flex flex-col">
            <p class="text-md text-black font-medium">Women</p>
            <p class="text-md text-black font-medium">Reached</p>
          </div>
        </div>
        <div
          class="rounded p-4 w-1/5 h-fit flex flex-col gap-y-2.5 bg-green-50 justify-center"
        >
          <h1 class="text-3xl text-pink-600 font-bold">7+</h1>
          <div class="flex flex-col">
            <p class="text-md text-black font-medium">Communities</p>
            <p class="text-md text-black font-medium">Served</p>
          </div>
        </div>
        <div
          class="rounded p-4 w-1/5 h-fit flex flex-col gap-y-2.5 bg-green-50 justify-center"
        >
          <h1 class="text-3xl text-pink-600 font-bold">4500+</h1>
          <div class="flex flex-col">
            <p class="text-md text-black font-medium">Products</p>
            <p class="text-md text-black font-medium">Delivered</p>
          </div>
        </div>
        <div
          class="rounded p-4 w-1/5 h-fit flex flex-col gap-y-2.5 bg-green-50 justify-center"
        >
          <h1 class="text-3xl text-pink-600 font-bold">8+</h1>
          <div class="flex flex-col">
            <p class="text-md text-black font-medium">International</p>
            <p class="text-md text-black font-medium">Partners</p>
          </div>
        </div>
      </div>
      <div class="flex w-full gap-y-10 flex-wrap">
        <div class="flex flex-col w-1/3 bg-green-50 pt-2.5 shadow-lg rounded">
          <img
            alt="quote"
            src="../assets/hp.svg"
            class="object-cover h-[60px] w-[60px] pl-2.5"
          />
          <p class="p-4 text-lg font-normal w-full">
            MedVax Health transformed my health journey. Now, I can get my
            medications on time without stress.
          </p>
          <div
            class="flex items-center gap-3 p-3 bg-pink-300 overflow-hidden w-full"
          >
            <!-- Circular Image -->
            <div class="w-10 h-10 rounded-full overflow-hidden bg-[orange]">
              <img
                src="../assets/be_change_maker.svg"
                alt="Aisha from Nigeria"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Text -->
            <p class="text-base font-light text-[gray]">Aisha, Nigeria</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Blog Section -->
    <section class="w-full flex flex-col pt-28 xl:px-60">
      <div class="flex flex-col gap-5 w-full justify-center items-center">
        <h1 class="text-5xl font-bold text-black">Our Blog</h1>
        <p class="text-xl font-light text-black w-2/3 text-center">
          Stay Updated with Healthcare Innovations. Explore the latest in
          healthcare technology, pharmaceutical care, and reporoductive health.
        </p>
      </div>
      <div class="flex w-full">
        <div class="flex flex-col"></div>
      </div>
    </section>

    <!-- Our Partners Section -->
    <section class="w-full flex flex-col bg-white pt-28 xl:px-60">
      <div class="flex flex-col gap-5 w-full justify-center items-center">
        <h1 class="text-5xl font-bold text-black">Our Partners</h1>
        <p class="text-xl font-light text-black w-2/3 text-center">MedVax Health, collaborates with global and local health organizations, pharmacies, and logistics partners to strengthen healthcare access and delivery.</p>
      </div>
      <div class="w-full flex overflow-scroll py-6">
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
        <img
          src="../assets/hp.svg"
          alt="partners logo"
          class="h-20 w-auto mx-4"
        />
      </div>
    </section>
    >

    <!-- Get a consultant Section -->
    <div
      class="flex w-full justify-between items-center p-6 rounded-sm m-2.5 relative bg-[blue]"
    >
      <div class="w-10 h-10 border absolute left-0 top-0"></div>
      <div class="flex flex-col w-2/3">
        <h1 class="text-lg font-bold text-black">
          Need to speak to a consultant?
        </h1>
        <p class="text-md font-normal text-black">
          But our ultimate satisfaction comes from seeing our clients achieve
          their goals and live healthier, happier lives. Talk with a consultant
          today and embark on your own transformative journey towards optimal
          health and well-being.
        </p>
      </div>
      <button class="rounded-md h-fit w-fit px-4 py-3 bg-[blue] text-black">
        Book Consultant
      </button>
    </div>

    <!-- Footer Section -->
    <footer class="w-full flex flex-col bg-[blue] p-2 gap-y-2">
      <section class="flex w-full justify-between items-center p-2">
        <img
          src="../assets/logo-Footer.svg"
          alt="MedVax logo"
          class="h-14 w-auto mr-6"
        />
        <ul
          class="list-none flex flex-wrap justify-between items-center w-full"
        >
          <li class="text-[purple] m-3 text-sm">Home</li>
          <li class="text-white m-3 text-sm">About</li>
          <li class="text-white m-3 text-sm">Innovation</li>
          <li class="text-white m-3 text-sm">E-Pharmacy</li>
          <li class="text-white m-3 text-sm">Blog</li>
          <li class="text-white m-3 text-sm">Contact</li>
          <li class="text-white m-3 text-sm">Privacy</li>
          <a href="#topnav" class="decoration-none text-white m-3 text-sm">
            Go to top
            <span
              class="h-10 w-10 rounded-full border flex justify-center items-center"
              ><img
                src="../assets/hp.svg"
                alt="Top"
                class="h-full w-full object-cover text-white"
            /></span>
          </a>
        </ul>
      </section>
      <section class="rounded p-2 border-[purple] border-2 w-full flex items-center">
        <div class="w-2/3 flex flex-wrap">
          <button
            class="p-2 rounded border-[purple] border-2 text-md text-pink-600 flex items-center"
          >
            <img
              src="../assets/hp.svg"
              alt="icon"
              class="h-10 w-10 mx-1"
            />info@medvaxhealth.com
          </button>
          <button
            class="p-2 rounded border-[purple] border-2 text-md text-pink-600 flex items-center"
          >
            <img
              src="../assets/hp.svg"
              alt="icon"
              class="h-10 w-10 mx-1"
            />+234 912 973 8935
          </button>
          <button
            class="p-2 rounded border-[purple] border-2 text-md text-pink-600 flex items-center"
          >
            <img
              src="../assets/hp.svg"
              alt="icon"
              class="h-10 w-10 mx-1"
            />FCT, Abuja, Nigeria
          </button>
          <button
            class="p-2 rounded border-[purple] border-2 text-md text-pink-600 flex items-center"
          >
            <img
              src="../assets/hp.svg"
              alt="icon"
              class="h-10 w-10 mx-1"
            /><img
              src="../assets/hp.svg"
              alt="partners logo"
              class="h-10 w-10 mx-1"
            />
          </button>
        </div>
        <div class="w-1/3 flex text-md text-white">
          &copy; 2025 MedVax Health. All rights reserved
        </div>
      </section>
    </footer>
</template>