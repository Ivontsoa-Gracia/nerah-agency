<template>
  <section
    class="py-12 bg-[#e0e5ea]/50 h-auto sm:min-h-screen relative overflow-hidden"
  >
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
          class="relative text-[#131629] transition flex items-center gap-2 group"
          data-aos="fade-up"
        >
          <span
            class="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#131629] after:transition-all after:duration-300 group-hover:after:w-full"
          >
            Voir plus de projets
          </span>
          <i
            class="bx bx-right-arrow-alt text-lg transition-transform duration-300 group-hover:translate-x-1"
          ></i>
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

      <div class="sm:hidden relative">
        <div
          ref="slider"
          class="flex transition-transform duration-700 ease-in-out gap-4"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        >
          <div
            v-for="(proj, index) in firstProjects"
            :key="index"
            class="flex-shrink-0 h-64 relative overflow-hidden rounded-sm shadow-md"
            :style="{ width: `calc(100% - 1rem)` }"
          >
            <!-- <img
              :src="proj.image"
              alt=""
              class="w-full h-full object-cover rounded-sm"
            /> -->
            <img
              :src="proj.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')"
              alt=""
              class="w-full h-full object-cover"
            />

            <div
              class="absolute inset-0 bg-[#131629]/50 flex flex-col justify-end p-4"
            >
              <h3 class="text-white font-bold logo-type">{{ proj.titre }}</h3>
              <p class="text-gray-200 text-sm">{{ proj.service }}</p>
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
