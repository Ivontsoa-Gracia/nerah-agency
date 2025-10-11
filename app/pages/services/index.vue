<template>
    <section class="py-12 bg-[#e0e5ea] min-h-screen">
      <div class="max-w-7xl mx-auto px-6 flex gap-6">
  
        <aside class="fixed left-0 w-64 flex-shrink-0 bg-[#131629] top-20 h-[calc(100vh-3rem)] p-6 overflow-y-auto pb-12 texte">
          <h2 class="text-2xl font-medium text-[#e0e5ea] mb-4">Services</h2>
          <div class="flex flex-col gap-3">
            <div
              v-for="(service, index) in services"
              :key="index"
              @click="selectService(service)"
              :class="[
                'cursor-pointer p-4 rounded-lg shadow hover:shadow-lg transition text-left',
                selectedService === service
                  ? 'bg-[#c99383] text-white'
                  : 'bg-white/10 text-[#e0e5ea]'
              ]"
            >
              <span class="font-normal">{{ service.titre }}</span>
            </div>
          </div>
        </aside>
  
        <main class="flex-1 ml-64 texte mt-20">
          <div class="mb-8" v-if="selectedService">
            <h2 class="text-2xl font-bold text-[#131629] mb-4 texte">
              Catégories pour {{ selectedService.titre }}
            </h2>
            <div class="flex flex-wrap gap-3 mb-6">
              <span
                v-for="(type, index) in selectedService.types"
                :key="index"
                @click="selectCategorie(type)"
                :class="[
                  'cursor-pointer px-4 py-2 rounded-full font-medium text-sm transition',
                  selectedCategorie === type
                    ? 'bg-[#131629] text-white'
                    : 'bg-white/40 text-[#131629] shadow hover:bg-gray-100'
                ]"
              >
                {{ type.categorie }}
              </span>
            </div>
  
            <div v-if="selectedCategorie">
              <h3 class="text-xl font-semibold text-[#e0e5ea] mb-6 texte">
                Sous-services pour {{ selectedCategorie.categorie }}
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  v-for="(sous, index) in selectedCategorie.sousTypes"
                  :key="index"
                  class="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-md hover:shadow-xl cursor-pointer transition flex flex-col items-center text-left border border-gray-300 overflow-hidden"
                >
                  <img
                    :src="sous.image"
                    alt=""
                    class="w-full h-64 object-cover hidden"
                  />
                  <div class="p-4">
                    <h4 class="text-2xl font-bold text-[#131629] mb-2">{{ sous.titre }}</h4>
                    <p class="text-gray-600 mb-3">{{ sous.description }}</p>
                    <div class="text-sm text-gray-700 mb-3 space-y-1">
                      <div><strong>Tarif (MGA):</strong> {{ sous.tarifMGA }}</div>
                    </div>
                    <button class="w-full py-2 text-[#131629] border border-[#131629] rounded-full transition mt-6">
                        Engager ce service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
  
      </div>
    </section>
  </template>
  
  <script setup>
  definePageMeta({ layout: "custom" });
  import { ref, onMounted } from "vue";
  import { services } from "~/utils/services.js";
  
  const selectedService = ref(null);
  const selectedCategorie = ref(null);
  
  onMounted(() => {
    if (services.length > 0) {
      selectedService.value = services[0];
      if (services[0].types.length > 0) {
        selectedCategorie.value = services[0].types[0];
      }
    }
  });
  
  function selectService(service) {
    selectedService.value = service;
    selectedCategorie.value = service.types.length > 0 ? service.types[0] : null;
  }
  
  function selectCategorie(categorie) {
    selectedCategorie.value = categorie;
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
  </style>
  