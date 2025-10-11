<template>
  <section class="py-12 bg-[#e0e5ea]/60 mt-14 sm:mt-20 min-h-screen">
    <div class="max-w-7xl mx-auto px-6">
      <h1
        class="text-3xl sm:text-3xl font-bold text-[#222831] mb-8 text-center"
      >
        Portfolio
      </h1>

      <div class="flex flex-wrap gap-2 sm:gap-4 mb-8 justify-center">
        <span
          v-for="(service, index) in uniqueServices"
          :key="index"
          @click="selectService(service)"
          :class="[
            'cursor-pointer px-3 sm:px-4 py-1 sm:py-2 rounded-sm font-medium text-xs sm:text-sm transition',
            selectedService === service
              ? 'bg-[#131629] text-white'
              : 'bg-white/40 text-[#131629] shadow hover:bg-gray-100',
          ]"
        >
          {{ service }}
        </span>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <div
          v-for="(proj, index) in filteredProjects"
          :key="index"
          class="relative bg-white/10 backdrop-blur-md rounded-sm shadow-sm cursor-pointer overflow-hidden transition transform hover:scale-105 group"
        >
          <img
            :src="proj.image"
            :alt="proj.titre"
            class="w-full h-48 sm:h-56 md:h-64 object-cover"
          />

          <div
            class="absolute inset-0 bg-[#131629]/90 flex flex-col justify-center items-center p-4 text-center transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out"
          >
            <h3 class="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
              {{ proj.titre }}
            </h3>
            <p class="text-gray-200 text-xs sm:text-sm">
              {{ proj.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
import { ref, computed } from "vue";
import { portfolio } from "~/utils/portfolio.js";
import Footer from "~/components/Footer.vue";

const selectedService = ref("");

const uniqueServices = [...new Set(portfolio.map((p) => p.service))];

const filteredProjects = computed(() => {
  if (!selectedService.value) return portfolio;
  return portfolio.filter((p) => p.service === selectedService.value);
});

function selectService(service) {
  selectedService.value = service;
}
</script>

<style scoped>
.cursor-pointer {
  transition: all 0.3s ease;
}
.cursor-pointer:hover {
  transform: scale(1.03);
}

.logo-type {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}
.texte {
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}

.hover\:backdrop-blur-sm:hover img {
  @apply backdrop-blur-sm;
}
</style>
