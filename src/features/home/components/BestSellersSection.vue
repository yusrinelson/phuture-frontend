<script setup></script>
<template>
  <section class="section flex flex-col items-center justify-center px-6 py-12">
    <div class="max-w-7xl mx-auto w-full">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-secondary">
          Best Sellers
        </h2>

        <p
          class="text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-tertiary font-medium"
        >
          Our most loved pieces. Crafted for the streets of Cape Town.
        </p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        <div
          class="group rounded-md bg-white shadow-sm hover:shadow-md transform transition-all duration-500 hover:scale-105 cursor-pointer"
        >
          <div class="overflow-hidden rounded-t-md">
            <img
              class="transition-transform duration-700 group-hover:scale-110 object-cover w-full"
              src="../../../assets/images/product_1.jpg"
              alt=""
            />
          </div>

          <div class="p-4">
            <p class="text-sm font-light text-primary">HOODIES</p>
            <p class="text-lg sm:text-xl font-bold text-primary">
              Essential Hoodie
            </p>
            <p class="text-lg sm:text-xl font-bold text-secondary">R899</p>
          </div>
        </div>
      </div>
    </div>

    <button
      class="border border-quaternary py-2 px-8 mt-12 rounded-md hover:bg-quaternary transition"
    >
      View All Products
    </button>
  </section>
</template>

<style lang="scss" scoped></style>
