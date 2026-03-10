import { defineStore } from "pinia";
import authService from "../api/authService";
import router from "../../../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    accessToken: null,

    // loading states
    isAuthChecking: true,
    isLoggingIn: false,
    isRegistering: false,
    isLoggingOut: false,
    isLoading: false,
  }),
  getters: {
    isLoggedIn: (state) => !!state.accessToken,
  },
  actions: {
    async login(payload) {
      this.isLoggingIn = true;
      this.isLoading = true;
      try {
        const res = await authService.login(payload);
        this.user = res.user;
        this.accessToken = res.token;
        router.push("/");
      } catch (error) {
        throw error; // component handles toast
      } finally {
        this.isLoggingIn = false;
        this.isLoading = false;
      }
    },

    async signup(payload) {
      this.isRegistering = true;
      this.isLoading = true;
      try {
        const res = await authService.signup(payload);
        this.user = res.user;
        this.accessToken = res.token;
        router.push("/login");
      } catch (error) {
        throw error;
      } finally {
        this.isRegistering = false;
        this.isLoading = false;
      }
    },

    async logout() {
      this.isLoggingOut = true;
      this.isLoading = true;
      try {
        // Try to call API logout, but even if it fails, we still clear state
        await authService.logout(this.accessToken);
      } catch (error) {
        console.warn("Logout request failed:", error);
      } finally {
        // Always clear user & token, regardless of API response
        this.user = null;
        this.accessToken = null;
        this.isLoggingOut = false;
        this.isLoading = false;

        // redirect safely
        router.push("/login");
        console.log("Logged out successfully");
      }
    },

    async refresh() {
      this.isAuthChecking = true;
      try {
        const res = await authService.refresh();
        this.user = res.user;
        this.accessToken = res.token;
      } catch (error) {
        this.user = null;
        this.accessToken = null;
        throw error;
      } finally {
        this.isAuthChecking = false;
      }
    },
  },
});
