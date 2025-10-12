<template>
  <section class="py-16 sm:py-20 bg-[#e0e5ea]/10" id="valeurs">
    <div class="max-w-7xl mx-auto px-6 sm:px-6 text-center">
      <h2
        class="text-3xl sm:text-4xl font-semibold text-[#131629] text-center mb-8 sm:mb-12 logo-type"
        data-aos="fade-up"
      >
        Nos Valeurs
      </h2>

      <p
        class="text-gray-600 max-w-2xl mx-auto mb-10 sm:mb-12 texte text-sm sm:text-base leading-relaxed"
        data-aos="fade-up"
      >
        Chez <span class="font-semibold text-[#131629]">Nerah Agency</span>, nos
        valeurs guident chacune de nos actions. Elles définissent notre culture
        et orientent la manière dont nous collaborons avec nos clients.
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 texte"
      >
        <div
          v-for="(valeur, index) in valeurs"
          :key="index"
          class="relative group bg-white p-6 sm:p-8 rounded-sm shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md"
          data-aos="fade-up"
        >
          <div
            class="absolute inset-0 bg-[#131629] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"
          ></div>

          <div
            class="relative flex flex-col items-center space-y-4 z-10 transition-colors duration-300 group-hover:text-white text-center"
          >
            <div
              class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-[#131629]/10 group-hover:bg-[#83a9c8]/20 transition-all"
            >
              <i
                :class="`${valeur.icon} text-[#131629] text-3xl sm:text-4xl group-hover:text-[#83a9c8] transition-colors duration-300`"
              ></i>
            </div>

            <h3
              class="text-lg sm:text-xl font-semibold text-[#131629] group-hover:text-white"
            >
              {{ valeur.title }}
            </h3>
            <p
              class="text-gray-500 text-sm sm:text-base group-hover:text-gray-200 leading-relaxed"
            >
              {{ valeur.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const valeurs = [
  {
    icon: "fas fa-handshake",
    title: "Engagement",
    text: "Nous nous impliquons pleinement dans chaque projet pour garantir la réussite de nos clients.",
  },
  {
    icon: "fas fa-gem",
    title: "Qualité",
    text: "La qualité est au cœur de notre démarche : nous livrons des solutions fiables et durables.",
  },
  {
    icon: "fas fa-trophy",
    title: "Excellence",
    text: "Nous visons toujours l’excellence dans nos réalisations, de la conception à la livraison.",
  },
  {
    icon: "fas fa-users",
    title: "Collaboration",
    text: "Ensemble, nous co-créons des solutions innovantes dans un esprit d’écoute et de respect mutuel.",
  },
];
</script>

<style scoped>
.logo-type {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}

.texte {
  letter-spacing: 0.5px;
  font-family: "Helvetica", sans-serif;
}

.bg-white:hover i {
  transform: scale(1.1);
}

i {
  transition: transform 0.3s ease;
}
</style>
