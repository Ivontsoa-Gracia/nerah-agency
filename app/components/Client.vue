<template>
    <section id="avis" class="py-20 bg-[#f8fafc]">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <!-- Titre -->
        <h2 class="text-4xl font-semibold text-[#131629] mb-6 logo-type">
          Avis de nos clients
        </h2>
  
        <p class="text-gray-500 max-w-2xl mx-auto mb-16 texte">
          Leur satisfaction est notre plus grande réussite.  
          Découvrez ce que nos clients disent de leur expérience avec
          <span class="font-semibold text-[#131629]">Nerah Agency</span>.
        </p>
  
        <!-- Grille d'avis -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            v-for="(avis, index) in avisClients"
            :key="index"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col items-center text-center border border-gray-100 cursor-pointer"
          >
            <img
              :src="avis.image"
              alt="Photo du client"
              class="w-20 h-20 rounded-full object-cover border-4 border-[#5DA9E9]/30 mb-4"
            />
  
            <h3 class="text-lg font-semibold text-[#131629] mb-1">
              {{ avis.nom }}
            </h3>
            <p class="text-sm text-gray-500 mb-4">
              {{ avis.role }}
            </p>
            
            <p class="text-gray-600 italic mb-4">
              “{{ avis.commentaire }}”
            </p>
  
            <!-- Icônes étoiles -->
            <div class="flex gap-1 text-[#5DA9E9]">
              <i v-for="n in 5" :key="n" class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const avisClients = [
    {
      image: "/images/client1.webp",
      nom: "Sarah R.",
      role: "Entrepreneure",
      commentaire:
        "Une équipe à l’écoute et très professionnelle ! Mon site web est exactement comme je l’imaginais, voire mieux.",
    },
    {
      image: "/images/client2.webp",
      nom: "Michael T.",
      role: "Chef de projet",
      commentaire:
        "Leur approche créative et leur souci du détail font toute la différence. Nerah Agency a dépassé mes attentes.",
    },
    {
      image: "/images/client3.webp",
      nom: "Laura M.",
      role: "Fondatrice - BeautyLine",
      commentaire:
        "J’ai adoré collaborer avec eux. Rapides, efficaces et passionnés par ce qu’ils font. Bravo à toute l’équipe !",
    },
  ];
  </script>
  
  <style scoped>
  .logo-type {
    font-family: "Pirulen", sans-serif;
    letter-spacing: 2px;
  }
  
  .texte {
    letter-spacing: 0.5px;
    font-family: "Helvetica", sans-serif;
  }
  
  i {
    transition: transform 0.3s ease;
  }
  
  div:hover i {
    transform: scale(1.1);
  }
  </style>
  