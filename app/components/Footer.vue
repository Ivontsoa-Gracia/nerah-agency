<template>
  <footer class="bg-[#e0e5ea] text-[#131629] py-12 texte">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        class="flex flex-col items-center md:items-start -mt-12"
        data-aos="fade-up"
      >
        <img src="/logo.png" alt="Nerah Agency" class="h-64 w-auto" />
      </div>

      <div
        class="hidden md:flex flex-col items-center md:items-start space-y-4"
      >
        <h4 class="font-semibold text-lg" data-aos="fade-up">Liens rapides</h4>
        <ul class="space-y-2 text-center md:text-left">
          <li>
            <a
              href="#services"
              class="hover:text-[#000000] transition"
              data-aos="fade-up"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#portfolio"
              class="hover:text-[#000000] transition"
              data-aos="fade-up"
              >Portfolio</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="hover:text-[#000000] transition"
              data-aos="fade-up"
              >Contact</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="hover:text-[#000000] transition"
              data-aos="fade-up"
              >À propos</a
            >
          </li>
        </ul>
      </div>

      <div
        class="flex flex-col items-center md:items-start space-y-4 -mt-12 sm:mt-1"
      >
        <h4 class="font-semibold text-lg hidden md:flex" data-aos="fade-up">
          Newsletter
        </h4>
        <div class="flex w-[70%] mb-4 hidden md:flex" data-aos="fade-up">
          <input
            type="email"
            placeholder="Votre email"
            class="px-4 py-2 rounded-l-sm border border-gray-300 bg-white/10 focus:outline-none w-full"
          />
          <button
            class="bg-[#131629] border border-gray-300 rounded-r-sm px-4 flex items-center justify-center hover:bg-[#131629]/90 transition"
          >
            <i class="fas fa-paper-plane text-[#e0e5ea]"></i>
          </button>
        </div>

        <span class="text-[#131629] text-sm font-normal" data-aos="fade-up"
          >SUIVEZ-NOUS</span
        >
        <div class="h-[2px] w-12 bg-[#131629] mb-2" data-aos="fade-up"></div>
        <div class="flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            class="text-[#131629] text-2xl hover:text-[#000000] transition"
            data-aos="fade-up"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            class="text-[#131629] text-2xl hover:text-[#000000] transition"
            data-aos="fade-up"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            class="text-[#131629] text-2xl hover:text-[#000000] transition"
            data-aos="fade-up"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            class="text-[#131629] text-2xl hover:text-[#000000] transition"
            data-aos="fade-up"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </div>

    <div
      class="mt-12 text-center text-[#131629]/80 text-sm px-12 sm:p-1"
    >
      &copy; 2025 Nerah Agency. Tous droits réservés.
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.logo-type {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 1px;
}
.texte {
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}
</style>
