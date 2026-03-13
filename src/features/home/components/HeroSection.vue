<script setup></script>
<template>
  <div
    class="relative hero_section flex flex-col justify-center items-center text-center px-6"
  >
    <div class="flex flex-col justify-center items-center z-10 max-w-4xl">
      <h1
        class="text-white font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
      >
        PHUTURE
      </h1>

      <h2
        class="text-white mt-6 text-lg sm:text-2xl md:text-3xl lg:text-4xl max-w-2xl"
      >
        Cape Town's Urban Vision. Streetwear Redefined.
      </h2>

      <div
        class="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 w-full sm:w-auto"
      >
        <button
          class="bg-white text-secondary px-8 py-3 rounded font-bold cursor-pointer w-full sm:w-auto"
        >
          Shop Now
        </button>

        <button
          class="bg-secondary text-white px-8 py-3 rounded font-bold cursor-pointer w-full sm:w-auto"
        >
          Explore Collection
        </button>
      </div>
    </div>

    <div class="absolute top-0 left-0 h-screen w-full bg-black opacity-30"></div>
  </div>
</template>


<style scoped>
.hero_section {
  position: relative;
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-image: url("../../../assets/images/hero-image.jpg");
}
</style>