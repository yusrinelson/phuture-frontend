<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref, computed, onMounted } from "vue";

import  useProductsStore  from "../../products/store/useProductStore";
const productsStore = useProductsStore();

const currentSlide = ref(0);

const slideTo = (nextSlide) => (currentSlide.value = nextSlide);

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: "fade",
  mouseDrag: false,
  touchDrag: false,
  height: 350,
};

const thumbnailsConfig = {
  height: 80,
  itemsToShow: 3,
  wrapAround: true,
  touchDrag: false,
  gap: 10,
};

// const images = Array.from({ length: 10 }, (_, index) => ({
//   id: index + 1,
//   url: `https://picsum.photos/seed/${Math.random()}/800/600`,
// }));

// Use products from Pinia store
const images = computed(() =>
  productsStore.products.map((product, index) => ({
    id: product._id || index,
    url: product.image,
    name: product.name,
  }))
)

onMounted(() => {
  productsStore.fetchProducts()
})

</script>

<template>
  <section class="bg-[#F5EFE7] text-[#3E2A1C] py-20 px-6 md:px-12 lg:px-20">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <!-- Left Text Column -->
      <div>
        <span
          class="inline-block bg-[#3E2A1C] text-[#F5EFE7] text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6"
        >
          Limited Edition
        </span>

        <h2 class="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          New Drop <br />
          <span class="text-[#5A3B28]">Earth Tones</span>
        </h2>

        <p class="text-sm sm:text-base text-[#6B5B4A] mb-8 max-w-md">
          Our latest collection draws inspiration from the natural landscapes of
          the Western Cape. Premium fabrics, minimalist design, maximum impact.
        </p>

        <ul class="space-y-3 mb-10 text-sm font-medium text-[#3E2A1C]">
          <li class="flex items-center gap-3">
            <span class="w-8 h-[1px] bg-[#3E2A1C]"></span> ONLY 50 PIECES
          </li>
          <li class="flex items-center gap-3">
            <span class="w-8 h-[1px] bg-[#3E2A1C]"></span> LOCALLY SOURCED
            MATERIALS
          </li>
          <li class="flex items-center gap-3">
            <span class="w-8 h-[1px] bg-[#3E2A1C]"></span> SHIPS WITHIN 48 HOURS
          </li>
        </ul>

        <div
          class="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 w-full sm:w-auto"
        >
          <button class="buttonStyle2">Shop New Arrivals</button>
          <button class="buttonStyle1">Learn More</button>
        </div>
      </div>

      <!-- Right Image Column -->
      <div>
        <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
          <Slide v-for="image in images" :key="image.id">
            <img :src="image.url" alt="Gallery Image" class="gallery-image" />
          </Slide>
        </Carousel>

        <Carousel
          id="thumbnails"
          v-bind="thumbnailsConfig"
          v-model="currentSlide"
        >
          <Slide v-for="image in images" :key="image.id">
            <template #default="{ currentIndex, isActive }">
              <div
                :class="['thumbnail', { 'is-active': isActive }]"
                @click="slideTo(currentIndex)"
              >
                <img
                  :src="image.url"
                  alt="Thumbnail Image"
                  class="thumbnail-image"
                />
              </div>
            </template>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
      <!-- <div class="flex justify-center">
        <img
          src="/src/assets/images/product_1.jpg"
          alt="Earth Tones Hoodie"
          class="rounded-lg shadow-md object-cover w-full max-w-md"
        />
      </div> -->
    </div>
  </section>
</template>

<style>
:root {
  background-color: #242424;
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-image {
  border-radius: 16px;
}

#thumbnails {
  margin-top: 10px;
}

.thumbnail {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
}
</style>
