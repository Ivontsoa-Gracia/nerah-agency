<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 py-4 px-6 sm:px-12 md:px-16 bg-[#131629] backdrop-blur-lg"
  >
    <div class="flex justify-between items-center">
      <div
        class="text-2xl font-pirulen tracking-widest text-[#e0e5ea] select-none"
      >
        <img
          src="/nerah_agency_2.png"
          alt="Nerah Agency"
          class="h-10 sm:h-10 md:h-12 w-auto object-contain"
        />
      </div>

      <button
        @click="toggleMenu"
        class="relative w-8 h-3 flex flex-col justify-between items-start pl-[2px] group z-[60]"
      >
        <span
          :class="[
            'block h-[2px] w-[100%] bg-[#e0e5ea] rounded transition-all duration-300 origin-left',
            isOpen ? 'rotate-45 -translate-y-[9px]  w-[50%]' : '',
          ]"
        ></span>
        <span
          :class="[
            'block h-[2px] w-[50%] bg-[#e0e5ea] rounded transition-all duration-300 origin-left',
            isOpen ? '-rotate-45 -translate-y-[9px] w-[50%]' : '',
          ]"
        ></span>
      </button>
    </div>

    <transition name="slide-right">
    <div
      v-if="isOpen"
      class="fixed top-0 right-0 h-screen w-[220px] bg-[#131629]/95 backdrop-blur-xl border-l border-[#e0e5ea]/10 shadow-lg z-50 animate-slide-right"
    >
      <div class="flex flex-col justify-center items-start h-full space-y-6 px-6">
        <!-- Menu items avec icône -->
        <button
          @click="goToHome"
          class="flex items-center gap-3 text-[#e0e5ea] text-lg font-medium hover:text-[#8ac2f0] transition-all duration-300"
        >
          <i class="bx bx-home-alt text-xl"></i>
          Accueil
        </button>

        <button
          @click="goToServices"
          class="flex items-center gap-3 text-[#e0e5ea] text-lg font-medium hover:text-[#8ac2f0] transition-all duration-300"
        >
          <i class="bx bx-briefcase-alt-2 text-xl"></i>
          Services
        </button>

        <button
          @click="goToPortfolios"
          class="flex items-center gap-3 text-[#e0e5ea] text-lg font-medium hover:text-[#8ac2f0] transition-all duration-300"
        >
          <i class="bx bx-image text-xl"></i>
          Réalisations
        </button>

        <a
          href="#about"
          class="flex items-center gap-3 text-[#e0e5ea] text-lg font-medium hover:text-[#8ac2f0] transition-all duration-300"
        >
          <i class="bx bx-user text-xl"></i>
          À propos
        </a>

        <a
          href="#contact"
          class="flex items-center gap-3 text-[#e0e5ea] text-lg font-medium hover:text-[#8ac2f0] transition-all duration-300"
        >
          <i class="bx bx-envelope text-xl"></i>
          Contact
        </a>

        <button
          @click="restart"
          class="flex items-center gap-3 text-[#e0e5ea] text-lg font-medium hover:text-[#8ac2f0] transition-all duration-300"
        >
          <i class="bx bx-refresh text-xl"></i>
          Redémarrer
        </button>
      </div>
    </div>
  </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);

import { navigateTo } from "#app";

const goToServices = () => {
  navigateTo("/services");
};

const goToHome = () => {
  navigateTo("/main");
};

const goToPortfolios = () => {
  navigateTo("/portfolio");
};

const restart = () => {
  navigateTo("/");
};
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.logo-type {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}
</style>
