<template>
  <section
    class="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-[#131629] text-white"
  >
    <div class="relative bg-[#131629] w-full overflow-hidden mt-20 sm:mt-0">
      <div
        class="relative z-10 container mx-auto px-8 sm:px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center"
      >
        <div class="flex flex-col w-full lg:w-1/2 mb-12 lg:mb-0">
          <div class="flex items-start">
            <div class="h-64 sm:h-24 w-[3px] bg-[#e0e5ea]"></div>
            <div class="h-[2px] w-48 bg-[#e0e5ea]"></div>
            <div class="ml-6 -mt-3 flex flex-col">
              <h3
                class="uppercase titre font-light text-[#e0e5ea]/90 text-sm sm:text-base"
              >
                Arts des concepts
              </h3>
              <h1
                class="text-5xl sm:text-8xl font-bold leading-tight text-[#e0e5ea] uppercase logo-type"
              >
                Futur
              </h1>

              <p
                class="text-sm sm:text-base text-[#e0e5ea]/90 leading-relaxed font-light mt-4 max-w-full lg:max-w-[80%]"
                style="text-align: justify"
              >
                Chez Nerah Agency, nous transformons vos concepts en expériences
                concrètes et mémorables. Grâce à notre expertise technologique
                et créative, nous accompagnons vos projets du concept initial à
                la réalisation, en plaçant l’impact au cœur de chaque solution.
              </p>
            </div>
          </div>
        </div>

        <div
          class="relative hidden lg:block w-1/2 h-[300px] overflow-hidden rounded-l-2xl"
        >
          <img
            src="/img/hero_1.jpg"
            alt="Hero"
            class="w-full h-full object-cover"
          />

          <div
            class="absolute inset-0"
            style="
              background: radial-gradient(
                ellipse 250px 160px at center,
                rgba(19, 22, 41, 0.1) 0%,
                rgba(19, 22, 41, 0.1) 30%,
                rgba(19, 22, 41, 0.85) 75%,
                rgba(19, 22, 41, 1) 100%
              );
            "
          ></div>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-8 inset-x-0 flex flex-col lg:flex-row justify-between items-center px-4 lg:px-16 z-50 gap-4 lg:gap-0"
    >
      <div class="hidden sm:flex items-center z-50 space-x-4">
        <span class="text-[#e0e5ea] text-sm font-normal text-md text-default">
          SUIVEZ-NOUS
        </span>

        <div class="h-[2px] w-11 bg-[#e0e5ea]"></div>

        <div class="flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            class="text-[#e0e5ea] text-2xl hover:text-[#ffffff] transition"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            class="text-[#e0e5ea] text-2xl hover:text-[#ffffff] transition"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            class="text-[#e0e5ea] text-2xl hover:text-[#ffffff] transition"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            class="text-[#e0e5ea] text-2xl hover:text-[#ffffff] transition"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>
      </div>

      <div class="flex justify-center">
        <a
          href="#services"
          class="text-white text-3xl hover:text-[#ffffff] animate-bounce"
        >
          <i class="bx bx-chevron-down"></i>
        </a>
      </div>

      <div class="flex">
        <div
          class="uppercase text-[#e0e5ea] logo-type text-sm font-normal hidden sm:block flex"
        >
          Du concept à l'impact
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import lottie from "lottie-web";

const animationContainer = ref(null);

onMounted(async () => {
  const animationData = (await import("~/utils/nerah_hero.json")).default;

  if (!animationContainer.value) return;

  const animation = lottie.loadAnimation({
    container: animationContainer.value,
    renderer: "svg",
    loop: false,
    autoplay: true,
    animationData,
  });
});
</script>
<style scoped>
.bg-grid {
  background-image: linear-gradient(
      to right,
      hsla(207, 18%, 90%, 0.022) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, hsla(207, 18%, 90%, 0.022) 1px, transparent 1px);
  background-size: 40px 40px;
}

.animate-pulse-slow {
  animation: pulse 6s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.6;
  }
}

.animate-float {
  animation: float 5s ease-in-out infinite alternate;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-15px);
  }
}

.text-default {
  color: #e0e5ea;
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}
.logo-type {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}

.titre {
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
  letter-spacing: 10px;
}
</style>
