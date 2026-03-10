<script setup>
import "primeicons/primeicons.css";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useAuthStore } from "../features/auth/store/useAuthStore";
import UserMenu from "./UserMenu.vue";

const auth = useAuthStore();

////////toggle menu////////
const showMenu = ref(false);
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
//////////////////////////

const scrolled = ref(false);
const handleScroll = () => {
  scrolled.value = window.scrollY > 100;
};

const userInitials = computed(() => {
  const first = auth.user?.name?.charAt(0) ?? "";
  const last = auth.user?.surname?.charAt(0) ?? "";
  return (first + last).toUpperCase();
});

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
        <li v-if="auth.isAuthChecking">
          <!-- skeleton -->
          <span class="w-20 h-6 bg-gray-300 rounded inline-block"></span>
        </li>

        <!-- if LOGGED IN -->
        <li
          v-else-if="auth.isLoggedIn"
          @click="toggleMenu"
          class="flex items-center justify-center h-9 w-9 rounded-full border cursor-pointer transition user-section"
          :class="
            scrolled
              ? 'border-primary text-black hover:text-white hover:bg-primary'
              : 'hover:bg-primary hover:text-white'
          "
        >
          <!-- <i class="pi pi-user "></i> -->
          <p class="text-sm font-bold user-icon">
            {{ userInitials }}
          </p>
        </li>

        <!-- if NOT LOGGED IN -->
        <li v-else>
          <router-link
            to="/login"
            :class="[
              'cursor-pointer flex row items-center p-2 px-4 border rounded-3xl transition',
              scrolled
                ? 'border-primary text-black hover:text-white hover:bg-primary'
                : 'hover:bg-primary hover:text-white',
            ]"
          >
            <i class="pi pi-user mr-2"></i>
            <p class="text-sm">Sign in</p>
          </router-link>
        </li>
      </ul>
      <!-- <div class="flex flex-row space-x-4 text-xl">
        <i class="pi pi-heart cursor-pointer"></i>
        <i class="pi pi-shopping-cart cursor-pointer"></i>
        <i class="pi pi-user cursor-pointer"></i>Sign in
      </div> -->
      <UserMenu v-if="showMenu && auth.user"/>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
