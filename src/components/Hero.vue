<script setup></script>

<template>
  <div class="relative hero_section flex flex-col justify-center items-center">
    <div class="flex flex-col justify-center items-center z-10">
      <h1 class="text-white text-8xl font-bold">PHUTURE</h1>
      <h2 class="text-white text-4xl my-8 text-center">
        Cape Town's Urban Vision. Streetwear Redefined.
      </h2>
      <div class="space-x-6 mt-6">
        <button class="bg-white text-secondary px-10 py-3 rounded font-bold cursor-pointer">
          Shop Now
        </button>
        <button class="bg-secondary text-white px-10 py-3 rounded font-bold cursor-pointer">
          Explore Collection
        </button>
      </div>
    </div>

    <div
      class="absolute top-0 left-0 h-screen w-full bg-black opacity-30"
    ></div>
    <!-- <img 
        src="../assets/hero-image.jpg" 
        alt="hero-image" 
        class="h-screen w-full object-cover object-center"> -->
  </div>
</template>

<style scoped>
.hero_section {
  position: relative;
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-image: url("../assets/hero-image.jpg");
}
</style>
