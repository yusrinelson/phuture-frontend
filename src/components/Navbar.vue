<script setup>
import "primeicons/primeicons.css";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useAuthStore } from "../features/auth/store/useAuthStore";
import UserMenu from "./UserMenu.vue";

const auth = useAuthStore();

////////toggle user menu////////
const showMenu = ref(false);
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
///////////////////////////////

//////// mobile menu /////////
const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
///////////////////////////////

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
  >
    <div class="flex justify-between items-center w-full px-4 sm:px-6 py-4">

      <!-- LEFT SECTION -->
      <div class="flex items-center space-x-4">

        <!-- Mobile Hamburger -->
        <div
          class="md:hidden text-xl cursor-pointer"
          @click="toggleMobileMenu"
        >
          <i class="pi pi-bars"></i>
        </div>

        <h1 class="cursor-pointer text-lg sm:text-xl md:text-2xl font-medium">
          PHUTURE
        </h1>
      </div>

      <!-- Desktop Menu -->
      <ul
        class="hidden md:flex flex-row space-x-8 font-medium text-sm lg:text-base"
      >
        <li class="cursor-pointer">HOME</li>
        <li class="cursor-pointer">SHOP</li>
        <li class="cursor-pointer">COLLECTIONS</li>
        <li class="cursor-pointer">ABOUT</li>
        <li class="cursor-pointer">CONTACT</li>
      </ul>

      <!-- RIGHT SECTION -->
      <ul class="flex items-center space-x-3 text-lg sm:text-xl">
        <li class="cursor-pointer"><i class="pi pi-heart"></i></li>
        <li class="cursor-pointer"><i class="pi pi-shopping-cart"></i></li>

        <li v-if="auth.isAuthChecking">
          <span class="w-16 h-5 bg-gray-300 rounded inline-block"></span>
        </li>

        <!-- Logged in -->
        <li
          v-else-if="auth.isLoggedIn"
          @click="toggleMenu"
          class="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full border cursor-pointer transition"
          :class="
            scrolled
              ? 'border-primary text-black hover:text-white hover:bg-primary'
              : 'hover:bg-primary hover:text-white'
          "
        >
          <p class="text-xs sm:text-sm font-bold">
            {{ userInitials }}
          </p>
        </li>

        <!-- Not logged in -->
        <li v-else>
          <router-link
            to="/login"
            :class="[
              'flex items-center p-2 px-3 sm:px-4 border rounded-3xl transition text-xs sm:text-sm',
              scrolled
                ? 'border-primary text-black hover:text-white hover:bg-primary'
                : 'hover:bg-primary hover:text-white',
            ]"
          >
            <i class="pi pi-user mr-2"></i>
            <p>Sign in</p>
          </router-link>
        </li>
      </ul>

      <UserMenu v-if="showMenu && auth.user" />
    </div>
  </nav>

  <!-- MOBILE SLIDE MENU -->
  <div
    class="fixed top-0 left-0 h-screen w-72 bg-bg1 text-black z-50 transform transition-transform duration-300 md:hidden"
    :class="showMobileMenu ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="flex justify-between items-center p-6 border-b">
      <h2 class="font-bold text-lg">PHUTURE</h2>

      <i
        class="pi pi-times text-xl cursor-pointer"
        @click="toggleMobileMenu"
      ></i>
    </div>

    <ul class="flex flex-col space-y-6 p-6 font-medium text-lg">
      <li class="cursor-pointer">HOME</li>
      <li class="cursor-pointer">SHOP</li>
      <li class="cursor-pointer">COLLECTIONS</li>
      <li class="cursor-pointer">ABOUT</li>
      <li class="cursor-pointer">CONTACT</li>
    </ul>
  </div>

  <!-- DARK OVERLAY -->
  <div
    v-if="showMobileMenu"
    class="fixed inset-0 bg-black/40 z-40 md:hidden"
    @click="toggleMobileMenu"
  ></div>
</template>

<style scoped></style>