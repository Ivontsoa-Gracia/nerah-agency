<template>
  <section
    class="relative flex items-center justify-center overflow-hidden bg-[#e0e5ea] text-white"
  >
    <div
      class="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 py-16"
    >
      <div class="left-16 flex flex-col items-center z-50 space-y-6 mr-16">
        <a
          href="https://instagram.com"
          target="_blank"
          class="text-[#131629] text-2xl hover:text-[#ffffff] transition"
        >
          <i class="bx bxl-instagram"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          class="text-[#131629] text-2xl hover:text-[#ffffff] transition"
        >
          <i class="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          class="text-[#131629] text-2xl hover:text-[#ffffff] transition"
        >
          <i class="bx bxl-facebook"></i>
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          class="text-[#131629] text-2xl hover:text-[#ffffff] transition hidden"
        >
          <i class="bx bxl-tiktok"></i>
        </a>

        <a
          href="https://github.com"
          target="_blank"
          class="text-[#131629] text-2xl hover:text-[#ffffff] transition"
        >
          <i class="bx bxl-github"></i>
        </a>

        <div class="w-[2px] h-16 bg-[#131629] mt-4"></div>

        <span
          class="text-[#131629] tracking-widest text-sm mt-4 text-default font-semibold text-lg"
          style="writing-mode: vertical-rl; transform: rotate(180deg)"
        >
          SUIVEZ-NOUS
        </span>
      </div>

      <div class="lg:w-1/2 lg:mb-0 fade-in space-y-8 bg-[#131629]/10 p-6 rounded-lg">
        <p class="text-md md:text-md text-[#131629] leading-relaxed">
          NERAH est une agence spécialisée dans le développement d’applications,
          le design et la communication. Nous transformons les idées en
          expériences innovantes et impactantes grâce à notre expertise
          technologique et créative.
        </p>

        <h3 class="text-2xl font-semibold text-[#131629]">Nos valeurs</h3>
        <div class="flex flex-col space-y-4">
          <div class="flex items-center space-x-3 text-[#131629]">
            <i class="bx bx-rocket text-2xl"></i>
            <span>Innovation et modernité</span>
          </div>
          <div class="flex items-center space-x-3 text-[#131629]">
            <i class="bx bx-shield text-2xl"></i>
            <span>Fiabilité et professionnalisme</span>
          </div>
          <div class="flex items-center space-x-3 text-[#131629]">
            <i class="bx bx-palette text-2xl"></i>
            <span>Créativité et design impactant</span>
          </div>
          <div class="flex items-center space-x-3 text-[#131629]">
            <i class="bx bx-group text-2xl"></i>
            <span>Collaboration et respect client</span>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 relative flex items-center justify-center h-80">
        <img
          src="/img/about_section.jpg"
          alt="À propos NERAH"
          class="rounded-xl shadow-lg object-cover max-h-[400px]"
        />
      </div>
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
.text-default {
  color: #131629;
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}
</style>
