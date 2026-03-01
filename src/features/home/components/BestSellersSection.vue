<template>
  <section class="section flex flex-col items-center justify-center mt-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-secondary">
          Best Sellers
        </h2>
        <p
          class="text-lg text-muted-foreground max-w-2xl mx-auto text-tertiary font-medium"
        >
          Our most loved pieces. Crafted for the streets of Cape Town.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          class="group rounded-md bg-white shadow-sm hover:shadow-md transform transition-all duration-1000 hover:scale-102 cursor-pointer"
        >
          <div class="overflow-hidden rounded-t-md">
            <img
              class="transition-transform duration-1000 group-hover:scale-110 object-cover"
              src="../../../assets/images/product_1.jpg"
              alt=""
            />
          </div>
          <div class="p-4">
            <p class="text-md font-extralight text-primary">HOODIES</p>
            <p class="text-2xl font-bold text-primary">Essential Hoodie</p>
            <p class="text-2xl font-bold text-secondary">R899</p>
          </div>
        </div>
      </div>
    </div>
    <button
      class="border border-quaternary py-2 px-10 mt-12 rounded-md hover:bg-quaternary"
    >
      View All Products
    </button>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
