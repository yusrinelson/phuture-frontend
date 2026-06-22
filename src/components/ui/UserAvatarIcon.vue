//styling for the avatar which is in useStore for the initials
<script setup>
const props = defineProps({
    initials: String,
    scrolled: Boolean, //changes styling when scrolled
    clickable: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'md'
    }
})
</script>
<template>
    <div
    :class="[
      'flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full border transition',
      clickable ? 'cursor-pointer' : '',
      //size control
      props.size === 'sm' && 'h-7 w-7 sm:h-8 sm:w-8 text-xs sm:text-sm',
      props.size === 'md' && 'h-8 w-8 sm:h-9 sm:w-9 text-xs sm:text-sm',
      props.size === 'lg' && 'h-10 w-10 sm:h-10 sm:w-10 text-xs sm:text-lg',
      scrolled
        ? 'border-primary text-black hover:text-white hover:bg-primary'
        : 'hover:bg-primary hover:text-white',
    ]"
  >
    <p class="font-bold">
      {{ initials }}
    </p>
  </div>
</template>


<style lang="scss" scoped>

</style>