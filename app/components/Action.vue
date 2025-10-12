<template>
  <section
    class="relative bg-[#131629] text-white py-20 sm:py-24 overflow-hidden"
    id="cta"
    data-aos="fade-up"
  >
    <div
      class="absolute inset-0 bg-gradient-to-tr from-[#131629] via-[#131629] to-[#131629] opacity-90 z-0"
    ></div>

    <div class="relative z-10 max-w-5xl mx-auto text-center px-6">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-snug" data-aos="fade-up">
        Donnez vie à vos idées avec
        <span class="text-[#8ac2f0]">Nerah Agency</span>
      </h2>

      <p
        class="text-gray-300 text-sm sm:text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        data-aos="fade-up"
      >
        Vous avez un projet en tête ? Notre équipe est prête à vous accompagner,
        du concept à l’impact. Ensemble, faisons de vos ambitions une réalité.
      </p>

      <button
        class="px-6 py-2 border border-[#e0e5ea] text-[#e0e5ea] font-normal transition-colors duration-300"
        data-aos="fade-up"
      >
        Démarrez votre projet
        <i class="fas fa-arrow-right ml-2"></i>
      </button>
    </div>

    <div
      class="absolute top-0 left-0 w-72 h-72 bg-[#5DA9E9]/20 rounded-full blur-3xl -translate-x-20 -translate-y-20"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-72 h-72 bg-[#5DA9E9]/10 rounded-full blur-3xl translate-x-20 translate-y-20"
    ></div>
  </section>
</template>

<style scoped>
button i {
  transition: transform 0.3s ease;
}
button:hover i {
  transform: translateX(6px);
}

.texte {
  color: #3e5263;
}
</style>
