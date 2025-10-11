<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 py-6 px-16 bg-[#131629] backdrop-blur-lg"
  >
    <div class="flex justify-between items-center">
      <div
        class="text-2xl font-pirulen tracking-widest text-[#e0e5ea] select-none"
      >
        <span class="logo-type">NERAH</span>
      </div>

      <button
        @click="toggleMenu"
        class="relative w-8 h-6 flex flex-col justify-between items-start pl-[2px] group z-[60]"
      >
        <span
          :class="[
            'block h-[2px] w-[50%] bg-[#e0e5ea] rounded transition-all duration-300 origin-left',
            isOpen ? 'rotate-45 translate-y-[2px]  w-[50%]' : '',
          ]"
        ></span>
        <span
          :class="[
            'block h-[2px] w-full bg-[#e0e5ea] rounded transition-all duration-300 origin-left',
            isOpen ? 'opacity-0' : '',
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
        class="fixed top-0 right-0 h-screen w-[200px] bg-[#131629]/95 backdrop-blur-xl border-l border-[#e0e5ea]/10 shadow-lg z-50 animate-slide-right"
      >
        <div
          class="flex flex-col justify-center items-start h-full space-y-8 px-6 text-[#e0e5ea] text-lg tracking-wider"
        >
          <button @click="goToHome" class="hover:text-[#e0e5ea]/70 transition">
            Acceuil
          </button>

          <button
            @click="goToServices"
            class="hover:text-[#e0e5ea]/70 transition"
          >
            Services
          </button>

          <a href="#portfolio" class="hover:text-[#e0e5ea]/70 transition"
            >Portfolio</a
          >
          <a href="#about" class="hover:text-[#e0e5ea]/70 transition"
            >À propos</a
          >
          <a href="#contact" class="hover:text-[#e0e5ea]/70 transition"
            >Contact</a
          >
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
</style>
