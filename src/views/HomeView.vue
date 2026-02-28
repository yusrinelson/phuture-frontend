<script setup>
import Hero from "../components/Hero.vue";
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div>
    <header>
      <Navbar />
      <Hero />
    </header>

    <section class="section flex flex-col items-center justify-center mt-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Best Sellers</h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most loved pieces. Crafted for the streets of Cape Town.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="../assets/product_1.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section>New Drop in</section>
    <section>The culture</section>
    <section>Defining tomorrow</section>
    <section>what people say?testimonials</section>
    <section>news Letter</section>
    <footer>foooter</footer>
  </div>
</template>

<style scoped>
.animate-slide-up {
    animation: slide-up 0.8s ease-out forwards;
  }
  </style>
