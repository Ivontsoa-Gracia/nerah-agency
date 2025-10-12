<template>
  <section class="py-12 bg-[#e0e5ea]/50 min-h-screen relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 h-full flex flex-col">
      <div
        class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 sm:gap-0"
      >
        <h2
          class="text-3xl sm:text-4xl font-bold text-[#131629] logo-type"
          data-aos="fade-up"
        >
          Nos réalisations
        </h2>
        <button
          @click="goToPortfolio"
          class="text-[#131629] texte transition flex items-center gap-2 hover:underline"
          data-aos="fade-up"
        >
          Voir plus de projets
          <i class="bx bx-right-arrow-alt text-lg"></i>
        </button>
      </div>

      <div class="hidden sm:grid gap-4 h-full">
        <div class="grid grid-cols-12 gap-4">
          <div
            v-for="(proj, i) in firstProjects.slice(0, 3)"
            :key="'desk1-' + i"
            :class="[
              'group h-80 relative overflow-hidden rounded-sm shadow-md',
              i === 0 ? 'col-span-5' : i === 1 ? 'col-span-3' : 'col-span-4',
            ]"
            data-aos="fade-up"
          >
            <img :src="proj.image" alt="" class="w-full h-full object-cover" />
            <Overlay :proj="proj" />
          </div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div
            v-for="(proj, i) in firstProjects.slice(3, 5)"
            :key="'desk2-' + i"
            :class="[
              'group h-80 relative overflow-hidden rounded-sm shadow-md',
              i === 0 ? 'col-span-4' : 'col-span-8',
            ]"
            data-aos="fade-up"
          >
            <img :src="proj.image" alt="" class="w-full h-full object-cover" />
            <Overlay :proj="proj" />
          </div>
        </div>
      </div>

      <div class="sm:hidden relative -pb-20">
        <div
          ref="slider"
          class="flex transition-transform duration-700 ease-in-out gap-6"
          :style="{ transform: `translateX(-${activeIndex *100}%)` }"
        >
          <div
            v-for="(proj, index) in firstProjects"
            :key="index"
            class="min-w-full h-64 relative overflow-hidden rounded-sn shadow-md"
          >
            <img :src="proj.image" alt="" class="w-full h-full object-cover" />
            <div
              class="absolute inset-0 bg-[#131629]/60 flex flex-col justify-end p-4"
            >
              <h3 class="text-white font-bold logo-type">{{ proj.titre }}</h3>
              <p class="text-gray-200 text-sm texte">{{ proj.service }}</p>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-4 gap-2">
          <span
            v-for="(proj, index) in firstProjects"
            :key="'dot-' + index"
            @click="activeIndex = index"
            class="w-3 h-3 rounded-full cursor-pointer"
            :class="activeIndex === index ? 'bg-[#131629]' : 'bg-gray-300'"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import { portfolio } from "~/utils/portfolio.js";
import Overlay from "~/components/Overlay.vue";

import { useRouter } from "vue-router";

const router = useRouter();
function goToPortfolio() {
  router.push("/portfolio");
}

const firstProjects = portfolio.slice(0, 5);

const activeIndex = ref(0);
let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % firstProjects.length;
  }, 3000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
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
