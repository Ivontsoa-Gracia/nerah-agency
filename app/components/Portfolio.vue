<template>
  <section class="py-12 bg-[#e0e5ea]/70 min-h-screen">
    <div class="max-w-7xl mx-auto px-6 h-full flex flex-col">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 sm:gap-0">
        <h2 class="text-3xl sm:text-4xl font-bold text-[#131629] logo-type">
          Portfolio
        </h2>
        <button
          @click="goToPortfolio"
          class="px-6 py-2 text-[#131629] texte transition flex items-center gap-2 hover:underline"
        >
          Voir plus de projets
          <i class="bx bx-right-arrow-alt text-lg"></i>
        </button>
      </div>

      <div class="grid gap-4 h-full">

        <!-- Première ligne -->
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div class="col-span-12 sm:col-span-5 h-60 sm:h-80 relative overflow-hidden rounded-sm shadow-md">
            <img :src="firstProjects[0].image" alt="" class="w-full h-full object-cover" />
            <Overlay :proj="firstProjects[0]" />
          </div>
          <div class="col-span-12 sm:col-span-3 h-60 sm:h-80 relative overflow-hidden rounded-sm shadow-md">
            <img :src="firstProjects[1].image" alt="" class="w-full h-full object-cover" />
            <Overlay :proj="firstProjects[1]" />
          </div>
          <div class="col-span-12 sm:col-span-4 h-60 sm:h-80 relative overflow-hidden rounded-sm shadow-md">
            <img :src="firstProjects[2].image" alt="" class="w-full h-full object-cover" />
            <Overlay :proj="firstProjects[2]" />
          </div>
        </div>

        <!-- Deuxième ligne -->
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div class="col-span-12 sm:col-span-4 h-60 sm:h-80 relative overflow-hidden rounded-sm shadow-md">
            <img :src="firstProjects[3].image" alt="" class="w-full h-full object-cover" />
            <Overlay :proj="firstProjects[3]" />
          </div>
          <div class="col-span-12 sm:col-span-8 h-60 sm:h-80 relative overflow-hidden rounded-sm shadow-md">
            <img :src="firstProjects[4].image" alt="" class="w-full h-full object-cover" />
            <Overlay :proj="firstProjects[4]" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

  <script setup>
  import { defineComponent } from "vue";
  import { portfolio } from "~/utils/portfolio.js";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  function goToPortfolio() {
    router.push("/portfolio");
  }
  
  const firstProjects = portfolio.slice(0, 5);
  
  const Overlay = defineComponent({
    props: { proj: Object },
    template: `
      <div class="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition">
        <h3 class="text-white font-bold">{{ proj.titre }}</h3>
        <p class="text-gray-200 text-sm">{{ proj.service }}</p>
      </div>
    `
  });
  </script>
  
  <style scoped>
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
  