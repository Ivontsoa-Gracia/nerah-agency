<template>
    <section class="py-12 bg-gray-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-6">
        <h1 class="text-3xl font-bold text-[#222831] mb-8 text-center">Portfolio</h1>
  
        <!-- Filtre par services principaux -->
        <div class="flex flex-wrap gap-4 mb-8 justify-center">
          <span
            v-for="(service, index) in uniqueServices"
            :key="index"
            @click="selectService(service)"
            :class="[
              'cursor-pointer px-4 py-2 rounded-full font-medium text-sm transition',
              selectedService === service
                ? 'bg-[#c99383] text-white'
                : 'bg-white text-[#222831] shadow hover:bg-gray-100'
            ]"
          >
            {{ service }}
          </span>
        </div>
  
        <!-- Grid des projets filtrés -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(proj, index) in filteredProjects"
            :key="index"
            class="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <img :src="proj.image" :alt="proj.titre" class="w-full h-64 object-cover" />
            <div class="p-4">
              <h3 class="text-xl font-bold text-[#222831]">{{ proj.titre }}</h3>
              <p class="text-gray-600">{{ proj.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  definePageMeta({
  layout: "custom",
});
  import { ref, computed } from "vue";
  import { portfolio } from "~/utils/portfolio.js";
  
  const selectedService = ref("");
  
  // Obtenir la liste unique des services principaux
  const uniqueServices = [...new Set(portfolio.map((p) => p.service))];
  
  // Filtrer les projets selon le service sélectionné
  const filteredProjects = computed(() => {
    if (!selectedService.value) return portfolio;
    return portfolio.filter((p) => p.service === selectedService.value);
  });
  
  function selectService(service) {
    selectedService.value = service;
  }
  </script>
  