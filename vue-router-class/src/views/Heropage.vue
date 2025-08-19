<template>
  <div class="bg-[#e2d] h-screen">
    <h1 class="text-xl font-light text-[greenyellow] bg-[darkblue] h-fit w-fit float-center">Hello world</h1>
    <h2 class="text-lg font-extralight">How come have I never heard of BYD in China</h2>
    <div class="flex justify-center items-center glass-card relative w-[240px] h-[360px] rounded-[20px] border-white/30 bg-white/15 backdrop-blur-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_20px_10px_rgba(255,255,255,1)] text-white font-bold">
      Glassmorphism
    </div>
  </div>


</template>
<style>
.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
}

.glass-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8),
    transparent,
    rgba(255, 255, 255, 0.3)
  );
}

</style>