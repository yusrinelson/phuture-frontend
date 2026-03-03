<script setup>
import { ref } from "vue";
// import { useRouter } from "vue-router";
import "primeicons/primeicons.css";
import { useAuthStore } from "../store/useAuthStore";

// const router = useRouter();

const auth = useAuthStore();

const name = ref("");
const surname = ref("");
const email = ref("");
const password = ref("");
const showPassword = ref(false);

const handleSubmit = () => {
  auth.signup(name.value, surname.value, email.value, password.value);
  // console.log("Signup:", { email: email.value, password: password.value });
};
</script>

<template>
  <div class="min-h-screen flex">
    <!-- Left - Image -->
    <div class="hidden lg:flex lg:w-1/2 relative overflow-hidden">
      <img
        src="../../../assets/images/auth-image.jpg"
        alt="Phuture streetwear lifestyle"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

      <div class="relative z-10 flex flex-col justify-end p-12 pb-16">
        <h2 class="text-4xl font-bold text-white mb-3 tracking-tight">
          Join the Movement
        </h2>
        <p class="text-white/70 text-lg max-w-md">
          Create your account and explore Cape Town's finest streetwear
        </p>
      </div>
    </div>

    <!-- Right - Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-background">
      <div class="w-full max-w-md animate-fade-in">
        <!-- Logo -->
        <div class="block mb-6">
          <h1 class="text-3xl font-bold tracking-tight text-primary">
            PHUTURE
          </h1>
        </div>

        <h2 class="text-2xl font-bold text-foreground mb-2 text-secondary">
          Create your account
        </h2>
        <p class="text-muted-foreground mb-8 text-tertiary">
          Join the Phuture community today
        </p>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <!--  Name -->
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              v-model="name"
              placeholder="Your Name"
              required
              class="h-12 w-full rounded-xl border border-border bg-muted/50 px-4 focus:border-primary focus:ring-primary"
            />
          </div>
          <!--  Surname -->
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">
              Surname
            </label>
            <input
              type="text"
              v-model="surname"
              placeholder="Your Surname"
              required
              class="h-12 w-full rounded-xl border border-border bg-muted/50 px-4 focus:border-primary focus:ring-primary"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              v-model="email"
              placeholder="you@example.com"
              required
              class="h-12 w-full rounded-xl border border-border bg-muted/50 px-4 focus:border-primary focus:ring-primary"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">
              Password
            </label>

            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="Min. 8 characters"
                required
                minlength="8"
                class="h-12 w-full rounded-xl border border-border bg-muted/50 px-4 pr-12 focus:border-primary focus:ring-primary"
              />

              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span v-if="showPassword"><i class="pi pi-eye-slash"></i></span>
                <span v-else><i class="pi pi-eye"></i></span>
              </button>
            </div>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full h-12 rounded-xl text-base font-semibold bg-primary hover:opacity-90 flex items-center justify-center text-white"
          >
            <span class="ml-2 transition-transform mr-4 ">Create Account</span>
            <i class="pi pi-arrow-right"></i>
          </button>
        </form>

        <!-- Already have an account -->
        <div class="mt-8 text-center">
          <p class="text-muted-foreground">
            Already have an account?
            <router-link
              to="/login"
              class="text-primary font-semibold hover:underline transition-colors"
            >
              Sign In
            </router-link>
          </p>
        </div>

        <!-- Terms -->
        <div class="mt-12 pt-8 border-t border-border">
          <p class="text-xs text-muted-foreground text-center">
            By creating an account, you agree to Phuture's
            <span class="underline cursor-pointer">Terms of Service</span>
            and
            <span class="underline cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
</style>