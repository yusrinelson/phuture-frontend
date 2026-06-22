<script setup>
import { onMounted } from 'vue'
import useProductsStore from '../../products/store/useProductStore'
import ProductCard from '../components/ProductsCard.vue'

const productsStore = useProductsStore();

onMounted(() => {
    productsStore.fetchProducts();
})
</script>
<template>
<section class="bg-[#5A3B28] text-[#F5EDE4] py-24 flex flex-col items-center justify-center">
    <div class="text-center">
      <h1 class="text-5xl sm:text-6xl font-extrabold mb-4">Shop</h1>
      <p class="text-base sm:text-lg font-medium max-w-2xl mx-auto">
        Explore the full Phuture range. Streetwear rooted in culture.
      </p>
    </div>
  </section>
    <section class="max-w-7xl mx-auto px-6 py-12">

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard
            v-for="product in productsStore.products"
            :key="product._id"
            :product="product"/>
        </div>
        
    </section>
</template>


<style lang="scss" scoped>

</style>