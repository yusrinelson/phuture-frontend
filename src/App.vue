<script setup>
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import { useAuthStore } from "./features/auth/store/useAuthStore";

const auth = useAuthStore();
let isReady = ref(false);

onMounted(async () => {
  try {
    await auth.refresh(); // restore session before rendering
  } finally {
    isReady.value = true; // mark app ready after refresh
  }
});
</script>

<template>
  <div v-if="!isReady" class="flex items-center justify-center min-h-screen">
    <!-- you can use a spinner here -->
    <p>Loading...</p>
  </div>

  <RouterView v-else />
</template>

<style scoped></style>
