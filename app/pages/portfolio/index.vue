<template>
  <section class="py-12 bg-[#e0e5ea]/60 mt-14 sm:mt-20 min-h-screen">
    <div class="max-w-7xl mx-auto px-6">
      <h1
        class="text-3xl sm:text-3xl font-bold text-[#222831] mb-8 text-center logo-type"
      >
        Nos réalisations
      </h1>

      <div
        class="flex flex-wrap gap-4 mb-8 justify-center border-b border-gray-300 text-sm sm:text-base texte"
      >
        <a
          href="#"
          @click.prevent="selectService('')"
          :class="[
            'relative px-3 py-1 font-medium text-[#131629] transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#131629] after:transition-all',
            selectedService === ''
              ? 'after:w-full'
              : 'hover:after:w-full focus:after:w-full',
          ]"
        >
          Tous
        </a>

        <a
          v-for="(service, index) in uniqueServices"
          :key="index"
          href="#"
          @click.prevent="selectService(service)"
          :class="[
            'relative px-3 py-1 font-medium text-[#131629] transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#131629] after:transition-all',
            selectedService === service
              ? 'after:w-full'
              : 'hover:after:w-full focus:after:w-full',
          ]"
        >
          {{ service }}
        </a>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 texte"
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
            <h3 class="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 logo-type">
              {{ proj.titre }}
            </h3>
            <p class="text-gray-200 text-xs sm:text-sm texte">
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
