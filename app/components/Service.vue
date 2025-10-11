<template>
  <section class="py-20 bg-[#e0e5ea] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <h2
        class="text-4xl font-semibold text-[#131629] text-center mb-12 logo-type"
      >
        Nos Services
      </h2>

      <div class="relative overflow-hidden border-y border-gray-300 py-4 mb-16">
        <div class="flex animate-scroll gap-8">
          <template v-for="(service, sIndex) in services" :key="sIndex">
            <template v-for="(type, tIndex) in service.types" :key="tIndex">
              <span
                class="bg-[#131629] text-white px-6 py-2 rounded-sm text-sm font-medium whitespace-nowrap shadow hover:bg-[#22263d] transition"
              >
                {{ type.categorie }}
              </span>
            </template>
          </template>

          <template
            v-for="(service, sIndex) in services"
            :key="sIndex + '-dup'"
          >
            <template
              v-for="(type, tIndex) in service.types"
              :key="tIndex + '-dup'"
            >
              <span
                class="bg-[#131629] text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow hover:bg-[#22263d] transition"
              >
                {{ type.categorie }}
              </span>
            </template>
          </template>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 texte ">
        <div
          v-for="service in services"
          :key="service.titre"
          class="group bg-white/10 backdrop-blur-md p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border border-gray-300 cursor-pointer"
        >
          <div
            class="flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#131629] text-white text-4xl group-hover:scale-110 transition-transform duration-300"
            v-html="service.icon"
          ></div>
          <h3 class="text-xl font-semibold text-[#131629] mb-3">
            {{ service.titre }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ service.description }}
          </p>
        </div>

        <div
          class="group bg-[#131629] text-white p-8 shadow-sm flex flex-col items-center justify-center text-center border border-[#131629]/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <h3 class="text-xl font-normal mb-3">Et bien plus encore</h3>
          <p class="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
            Découvrez l’ensemble de nos services sur mesure adaptés à vos
            besoins.
          </p>
          <button
            @click="goToServices"
            class="px-6 py-2 border border-[#e0e5ea] text-[#e0e5ea] font-normal transition-colors duration-300"
          >
            Voir plus
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { services } from "~/utils/services.js";
import { navigateTo } from "#app";

const goToServices = () => {
  navigateTo("/services");
};
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.logo-type {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}
.texte {
  color: #e0e5ea;
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}

.cursor-pointer {
    transition: all 0.3s ease;
  }
  .cursor-pointer:hover {
    transform: scale(1.03);
  }
</style>
