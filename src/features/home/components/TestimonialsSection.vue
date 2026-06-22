<script setup></script>
<template>
  <section class="bg-[#F5EFE7] text-[#3E2A1C] py-24 px-6 md:px-12 lg:px-20">
    <div class="max-w-6xl mx-auto text-center mb-16">
      <h2 class="text-4xl sm:text-5xl font-extrabold mb-3">What People Say</h2>
      <p class="text-sm sm:text-base text-[#6B5B4A] font-medium">
        Join thousands wearing the future
      </p>
    </div>

    <!-- Testimonials Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <div class="bg-white rounded-md shadow-sm p-6 text-left">
        <div class="flex mb-3 text-[#5A3B28]">
          <span v-for="i in 5" :key="i">★</span>
        </div>
        <p class="text-sm text-[#3E2A1C] mb-4">
          "Quality is unmatched. The attention to detail in every stitch shows the passion behind Phuture."
        </p>
        <p class="font-semibold text-sm">Thabo M.</p>
        <p class="text-xs text-[#6B5B4A]">Cape Town</p>
      </div>

      <div class="bg-white rounded-md shadow-sm p-6 text-left">
        <div class="flex mb-3 text-[#5A3B28]">
          <span v-for="i in 5" :key="i">★</span>
        </div>
        <p class="text-sm text-[#3E2A1C] mb-4">
          "Finally, streetwear that represents us. The designs speak to my soul and the fit is perfect."
        </p>
        <p class="font-semibold text-sm">Sarah K.</p>
        <p class="text-xs text-[#6B5B4A]">Johannesburg</p>
      </div>

      <div class="bg-white rounded-md shadow-sm p-6 text-left">
        <div class="flex mb-3 text-[#5A3B28]">
          <span v-for="i in 5" :key="i">★</span>
        </div>
        <p class="text-sm text-[#3E2A1C] mb-4">
          "From the packaging to the product, everything screams premium. Worth every cent."
        </p>
        <p class="font-semibold text-sm">Liam D.</p>
        <p class="text-xs text-[#6B5B4A]">Durban</p>
      </div>
    </div>

    <!-- Stats -->
    <div class="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
      <div>
        <h3 class="text-2xl font-bold">500+</h3>
        <p class="text-xs text-[#6B5B4A]">Happy Customers</p>
      </div>
      <div class="h-6 w-[1px] bg-[#6B5B4A] hidden sm:block"></div>
      <div>
        <h3 class="text-2xl font-bold">4.9</h3>
        <p class="text-xs text-[#6B5B4A]">Average Rating</p>
      </div>
      <div class="h-6 w-[1px] bg-[#6B5B4A] hidden sm:block"></div>
      <div>
        <h3 class="text-2xl font-bold">50+</h3>
        <p class="text-xs text-[#6B5B4A]">Limited Pieces</p>
      </div>
    </div>
  </section>
</template>