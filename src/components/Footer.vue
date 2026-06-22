<script setup>
import NewsLetter from '../features/home/components/NewsletterSection.vue'
</script>
<template>
    <NewsLetter/>
  <footer class="bg-[#5A3B28] text-[#F5EFE7] py-16 px-6 md:px-12 lg:px-20">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-b border-[#6B4A35] pb-12">
      
      <!-- Brand Column -->
      <div>
        <h3 class="text-lg font-extrabold mb-3">PHUTURE</h3>
        <p class="text-sm text-[#E8DCCF] mb-6 leading-relaxed">
          Cape Town streetwear brand redefining urban fashion with purpose and authenticity.
        </p>
        <div class="flex gap-4 text-[#E8DCCF]">
          <a href="#" class="hover:text-[#CBBBA0] transition"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="hover:text-[#CBBBA0] transition"><i class="fa-solid fa-globe"></i></a>
          <a href="#" class="hover:text-[#CBBBA0] transition"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>

      <!-- Shop Column -->
      <div>
        <h4 class="font-semibold mb-4">Shop</h4>
        <ul class="space-y-2 text-sm text-[#E8DCCF]">
          <li><a href="#" class="hover:text-[#CBBBA0] transition">New Arrivals</a></li>
          <li><a href="#" class="hover:text-[#CBBBA0] transition">Best Sellers</a></li>
          <li><a href="#" class="hover:text-[#CBBBA0] transition">Collections</a></li>
          <li><a href="#" class="hover:text-[#CBBBA0] transition">Limited Edition</a></li>
        </ul>
      </div>

      <!-- About Column -->
      <div>
        <h4 class="font-semibold mb-4">About</h4>
        <ul class="space-y-2 text-sm text-[#E8DCCF]">
          <li><a href="#" class="hover:text-[#CBBBA0] transition">Our Story</a></li>
          <li><a href="#" class="hover:text-[#CBBBA0] transition">Sustainability</a></li>
          <li><a href="#" class="hover:text-[#CBBBA0] transition">Careers</a></li>
          <li><a href="#" class="hover:text-[#CBBBA0] transition">Contact</a></li>
        </ul>
      </div>

      <!-- Support Column -->
      <div>
        <h4 class="font-semibold mb-4">Support</h4>
        <ul class="space-y-2 text-sm text-[#E8DCCF]">
          <li><a href="#" class="hover:text-[#CBBBA0] transition">Shipping Info</a></li>
          <li><a href="#" class="hover:text-[#CBBBA0] transition">Returns</a></li>
          <li><a href="#" class="hover:text-[#CBBBA0] transition">Size Guide</a></li>
          <li><a href="#" class="hover:text-[#CBBBA0] transition">FAQ</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-[#E8DCCF] pt-8">
      <p>© 2025 Phuture. All rights reserved.</p>
      <div class="flex gap-6 mt-4 sm:mt-0">
        <a href="#" class="hover:text-[#CBBBA0] transition">Privacy Policy</a>
        <a href="#" class="hover:text-[#CBBBA0] transition">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>
