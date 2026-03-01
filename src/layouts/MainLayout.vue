<script setup>
import Navbar from '../components/Navbar.vue'
// import Footer from '../components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />

    <!-- This is where the page appears -->
    <router-view />

    <!-- <Footer /> -->
  </div>
</template>