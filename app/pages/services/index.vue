<template>
  <section class="py-12 bg-[#e0e5ea] min-h-screen mt-8">
    <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-6">
      <aside
        class="w-full lg:w-64 lg:fixed lg:left-0 lg:top-20 lg:h-[calc(100vh-3rem)] flex-shrink-0 bg-[#131629] p-6 overflow-y-auto texte py-10"
      >
        <h2 class="text-2xl font-medium text-[#e0e5ea] mb-4">Services</h2>

        <div
          v-for="(service, sIndex) in reactiveServices"
          :key="sIndex"
          class="mb-2"
        >
          <button
            @click="toggleService(sIndex)"
            class="w-full flex justify-between items-center px-4 py-3 rounded-sm shadow text-white font-medium hover:bg-[#1a2030]/90 transition text-left"
            :class="
              selectedService === service
                ? 'bg-[#1a2030]/90'
                : 'bg-[#131629]/80'
            "
          >
            {{ service.titre }}
            <span>
              <i
                :class="
                  service.open ? 'bx bx-chevron-up' : 'bx bx-chevron-down'
                "
              ></i>
            </span>
          </button>

          <transition name="accordion">
            <div
              v-show="service.open"
              class="mt-2 bg-[#1a2030]/80 rounded-sm p-2 space-y-2"
            >
              <div
                v-for="(type, tIndex) in service.types"
                :key="tIndex"
                class="bg-[#e0e5ea]/5 p-3 rounded-sm cursor-pointer hover:bg-[#e0e5ea]/10 text-[#e0e5ea]"
                @click="
                  selectCategorie(type);
                  selectService(service);
                "
                :class="
                  selectedCategorie === type
                    ? 'bg-[#e0e5ea]/10 text-[#e0e5ea]'
                    : ''
                "
              >
                {{ type.categorie }}
              </div>
            </div>
          </transition>
        </div>
      </aside>

      <main class="flex-1 texte mt-6 lg:mt-12 lg:ml-64">
        <div v-if="selectedCategorie">
          <h3 class="text-xl font-semibold text-[#131629] mb-6 texte">
            Sous-services pour {{ selectedCategorie.categorie }}
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(sous, index) in selectedCategorie.sousTypes"
              :key="index"
              class="bg-white/10 backdrop-blur-md rounded-sm p-4 shadow-sm hover:shadow-md cursor-pointer transition flex flex-col items-center text-left border border-gray-300 overflow-hidden"
            >
              <div class="p-4">
                <h4 class="text-2xl font-bold text-[#131629] mb-2">
                  {{ sous.titre }}
                </h4>
                <p class="text-gray-600 mb-3">{{ sous.description }}</p>
                <div class="text-sm text-gray-700 mb-3 space-y-1">
                  <div><strong>Tarif (MGA):</strong> {{ sous.tarifMGA }}</div>
                </div>
                <button
                  class="w-full py-2 text-[#131629] border border-[#131629] rounded-sm transition mt-6"
                >
                  Engager ce service
                </button>
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
import { services as importedServices } from "~/utils/services.js";

const reactiveServices = ref(
  importedServices.map((s) => ({ ...s, open: false }))
);
const selectedService = ref(null);
const selectedCategorie = ref(null);

onMounted(() => {
  if (reactiveServices.value.length > 0) {
    selectedService.value = reactiveServices.value[0];
    if (reactiveServices.value[0].types.length > 0) {
      selectedCategorie.value = reactiveServices.value[0].types[0];
    }
  }
});

function selectService(service) {
  selectedService.value = service;
  if (service.types.length > 0 && !selectedCategorie.value) {
    selectedCategorie.value = service.types[0];
  }
}

function selectCategorie(categorie) {
  selectedCategorie.value = categorie;
}

function toggleService(index) {
  reactiveServices.value[index].open = !reactiveServices.value[index].open;
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

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
