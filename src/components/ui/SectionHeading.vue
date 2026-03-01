<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    }
})
</script>

<template>
  <div class="text-center mb-16">
    <h2 class="text-4xl md:text-5xl font-bold mb-4 text-secondary">
      {{title}}
    </h2>
    <p
        v-if="description"
      class="text-lg text-muted-foreground max-w-2xl mx-auto text-tertiary font-medium"
    >
      {{description}}
    </p>

     <!-- Optional slot (if you want buttons etc later) -->
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
