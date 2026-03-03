<script setup>
import "primeicons/primeicons.css";
import { ref, onMounted, onUnmounted } from "vue";
import {useAuthStore} from "../features/auth/store/useAuthStore";

const auth = useAuthStore();
// const isLoggedIn = computed(() => !!auth.user);

const scrolled = ref(false);
const handleScroll = () => {
  scrolled.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-bg1 text-secondary' : 'bg-transparent text-white',
    ]"
    class="fixed z-10 w-full"
  >
    <div
      class="flex flex-row justify-between items-center w-full px-6 py-4 bg-transparent"
    >
      <h1 class="cursor-pointer text-2xl font-medium">PHUTURE</h1>
      <ul class="flex flex-row space-x-8 font-medium">
        <li class="cursor-pointer">HOME</li>
        <li class="cursor-pointer">SHOP</li>
        <li class="cursor-pointer">COLLECTIONS</li>
        <li class="cursor-pointer">ABOUT</li>
        <li class="cursor-pointer">CONTACT</li>
      </ul>
      <ul class="flex flex-row items-center space-x-4 text-xl">
        <li class="cursor-pointer"><i class="pi pi-heart"></i></li>
        <li class="cursor-pointer"><i class="pi pi-shopping-cart"></i></li>
        <router-link v-if="!auth.user"  to="/login"
          ><li

            :class="['cursor-pointer flex row items-center p-2 px-4 border rounded-3xl', scrolled ? 'border-primary text-black hover:text-white hover:bg-primary' : 'hover:bg-primary hover:text-white']"
          >
            <i class="pi pi-user mr-2"></i>
            <p class="text-sm">Sign in</p>
          </li></router-link
        >
        <li
          v-else
          class="flex items-center justify-center"
            :class="['cursor-pointer flex row items-center p-2 px-4 border rounded-3xl h-9 w-9', scrolled ? 'border-primary text-black hover:text-white hover:bg-primary' : 'hover:bg-primary hover:text-white']"
          >
            <!-- <i class="pi pi-user "></i> -->
            <p class="text-sm font-bold">{{ auth.user.name.charAt(0).toUpperCase() + auth.user.surname.charAt(0).toUpperCase() }}</p>
          </li>
      </ul>
      <!-- <div class="flex flex-row space-x-4 text-xl">
        <i class="pi pi-heart cursor-pointer"></i>
        <i class="pi pi-shopping-cart cursor-pointer"></i>
        <i class="pi pi-user cursor-pointer"></i>Sign in
      </div> -->
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
