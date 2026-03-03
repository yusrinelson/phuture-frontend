<script setup>
import { ref } from "vue";
// import { useRouter } from "vue-router";
import  {useAuthStore}  from "../store/useAuthStore";

// const router = useRouter();

const auth = useAuthStore();

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const handleSubmit = () => {
  auth.login(email.value, password.value);
  console.log("Login:", { email: email.value, password: password.value });
};

window.auth = auth
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
          Welcome Back
        </h2>
        <p class="text-white/70 text-lg max-w-md">
          Step back into your style. Cape Town streetwear, reimagined.
        </p>
      </div>
    </div>

    <!-- Right - Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-background">
      <div class="w-full max-w-md animate-fade-in">
        <!-- Logo -->
        <div to="/" class="block mb-6">
          <h1 class="text-3xl font-bold tracking-tight text-primary">
            PHUTURE
          </h1>
        </div>

        <h2 class="text-2xl font-bold text-foreground mb-2 text-secondary">
          Sign in to your account
        </h2>
        <p class="text-muted-foreground mb-8 text-tertiary">
          Enter your details below to continue
        </p>

        <form @submit.prevent="handleSubmit" class="space-y-5">
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
            <div class="flex items-center justify-between mb-2">
              <label class="block text-sm font-medium text-foreground">
                Password
              </label>
              <button
                type="button"
                class="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="••••••••"
                required
                class="h-12 w-full rounded-xl border border-border bg-muted/50 px-4 pr-12 focus:border-primary focus:ring-primary"
              />

              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
              </button>
            </div>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full h-12 rounded-xl text-base font-semibold bg-primary hover:opacity-90 flex items-center justify-center text-white"
          >
            
            <span class="ml-2 transition-transform mr-4 ">Sign In</span>
            <i class="pi pi-arrow-right"></i>
          </button>
        </form>

        <!-- Sign Up -->
        <div class="mt-8 text-center">
          <p class="text-muted-foreground">
            Don't have an account?
            <router-link
              to="/signup"
              class="text-primary font-semibold hover:underline transition-colors"
            >
              Sign Up
            </router-link>
          </p>
        </div>

        <!-- Terms -->
        <div class="mt-12 pt-8 border-t border-border">
          <p class="text-xs text-muted-foreground text-center">
            By continuing, you agree to Phuture's
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

</style>