<script setup>
import { computed } from "vue";
import { useAuthStore } from "../features/auth/store/useAuthStore";

const auth = useAuthStore();

const fullName = computed(() => {
  if (!auth.user) return "";
  return (
    (auth.user.name?.charAt(0).toUpperCase() + auth.user.name?.slice(1)) +
    " " +
    (auth.user.surname?.charAt(0).toUpperCase() + auth.user.surname?.slice(1))
  );
});

const logout = () => {
  auth.logout();
};
</script>
<template>
  <div
    class="block text-left text-gray-800 bg-white absolute right-2 top-16 w-[200px] rounded-xl"
    ref="menuRef"
  >
    <div class="p-4">
      <h4>{{ fullName }}</h4>
      <p v-if="auth.user" class="text-gray-500">
        {{ auth.user.email }}
      </p>
    </div>
    <hr class="text-gray-300" />
    <div class="p-2 rounded-md flex flex-col">
      <router-link
        to="/profile"
        class="hover:bg-bg1 p-2 rounded-md cursor-pointer"
      >
        <i class="pi pi-user mr-1"></i> Profile
      </router-link>
      <router-link
        to="/orders"
        class="hover:bg-bg1 p-2 rounded-md cursor-pointer"
      >
        <i class="pi pi-shopping-cart mr-1"></i> My Orders
      </router-link>
      <router-link
        to="/dashboard"
        class="hover:bg-bg1 p-2 rounded-md cursor-pointer"
      >
        <i class="pi pi-home mr-1"></i> Dashboard
      </router-link>
      <router-link
        to="/settings"
        class="hover:bg-bg1 p-2 rounded-md cursor-pointer"
      >
        <i class="pi pi-cog mr-1"></i> Settings
      </router-link>
    </div>
    <hr class="text-gray-300" />
    <button @click="logout" class="p-4 hover:text-red-500 cursor-pointer">
      <i class="pi pi-sign-out mr-1"></i> Logout
    </button>
  </div>
</template>

<style></style>
