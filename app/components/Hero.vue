<template>
  <section
    class="relative min-h-screen flex items-center overflow-hidden pt-32 bg-[#131629] text-white"
    
  >
    <div class="absolute inset-0 z-0 bg-grid opacity-20"></div>

    <div
      class="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 pt-8 pb-20"
    >
      <div class="lg:w-1/2 mb-16 lg:mb-0 fade-in">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight"
        >
          <span class="text-title">DU CONCEPT À L’IMPACT</span><br />
        </h1>
        <p class="text-md md:text-lg text-default mb-10 max-w-lg font-thin">
          Transformez vos idées en expériences innovantes grâce à notre
          expertise technologique et créative.
        </p>
        <a
          href="#services"
          class="inline-block px-6 py-2 text-default  border border-[#e0e5ea] transition duration-300 text-lg font-thin"
        >
          Découvrir nos services
        </a>
      </div>

      <div class="lg:w-1/2 relative flex items-center justify-center h-80">
        <div
          id="carousel"
          class="flex items-center justify-center space-x-4 w-full relative"
        >
          <div
            v-for="(src, i) in visibleImages"
            :key="i"
            class="absolute overflow-hidden rounded-xl transition-all duration-700 ease-in-out primary-border"
            :style="carouselStyle(i)"
          >
            <img
              :src="src"
              class="w-full h-full object-cover cursor-pointer"
              @click="goToImage(i)"
            />
          </div>
        </div>

        <button
          @click="prevImage"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-400"
        >
          <i class="bx bx-chevron-left"></i>
        </button>
        <button
          @click="nextImage"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-400"
        >
          <i class="bx bx-chevron-right"></i>
        </button>
      </div>
    </div>

    <div
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-50"
    >
      <a href="#services" class="text-white text-3xl">
        <i class="bx bx-chevron-down"></i>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const images = [
  "/img/image1.jpeg",
  "/img/image2.jpeg",
  "/img/image3.jpeg",
  "/img/image4.jpeg",
  "/img/image5.jpeg",
  "/img/image6.jpeg",
  "/img/image7.jpeg",
  "/img/image8.jpeg",
  "/img/image9.jpeg",
  "/img/image10.jpeg",
];

const currentIndex = ref(0);

const visibleImages = computed(() => {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(images[(currentIndex.value + i) % images.length]);
  }
  return arr;
});

const prevImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};
const nextImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const goToImage = (i) => {
  currentIndex.value =
    (currentIndex.value + i - 2 + images.length) % images.length;
};

const carouselStyle = (i) => {
  switch (i) {
    case 0:
      return "left:10%; width:140px; height:240px; z-index:1; filter: blur(1px) brightness(0.5);";
    case 1:
      return "left:18%; width:200px; height:300px; z-index:2; filter: blur(1px) brightness(0.7);";
    case 2:
      return "left:50%; top:50%; transform:translate(-50%,-50%); width:260px; height:360px; z-index:5;";
    case 3:
      return "right:18%; width:200px; height:300px; z-index:2; filter: blur(1px) brightness(0.7);";
    case 4:
      return "right:10%; width:140px; height:240px; z-index:1; filter: blur(1px) brightness(0.5);";
    default:
      return "";
  }
};
</script>

<style scoped>
.text-title {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: bolder;
  color: #e0e5ea;

}
.text-default {
  color: #e0e5ea;
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}
.bg-grid {
  background-image: linear-gradient(to right, hsla(207, 18%, 90%, 0.022) 1px, transparent 1px),
    linear-gradient(to bottom, hsla(207, 18%, 90%, 0.022) 1px, transparent 1px);
  background-size: 40px 40px;
}
.primary-border {
  border: 2px solid white;
}

.logo-type {
    font-family: "Pirulen", sans-serif;
    letter-spacing: 2px;
    font-weight: normal;
  }
</style>
