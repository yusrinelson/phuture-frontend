<script setup>

defineProps({
  product: {
    type: Object,
    required: true
  }
})

</script>

<template>
    <div
      class="group rounded-md bg-white shadow-sm hover:shadow-md transform transition-all duration-500 hover:scale-105 cursor-pointer"
    >
      <div class="overflow-hidden rounded-t-md">
        <img
          class="transition-transform duration-700 group-hover:scale-110 object-cover w-full"
          :src="product.image"
          :alt="product.name"
        />
      </div>

      <div class="p-4">
        <p class="text-sm font-light text-primary">{{ product.category.toUpperCase() }}</p>
        <p class="text-lg sm:text-xl font-bold text-primary">{{ product.name }}</p>
        <p class="text-lg sm:text-xl font-bold text-secondary">R{{ product.price }}</p>
      </div>
    </div>
</template>
