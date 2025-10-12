<template>
  <section class="relative overflow-hidden bg-[#e0e5ea] text-white py-16">
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-between relative z-10"
    >
      <div class="hidden lg:flex flex-col items-center mr-8">
        <span
          class="text-[#131629] tracking-widest text-sm logo-type font-semibold text-lg uppercase"
          data-aos="fade-up"
          style="writing-mode: vertical-rl; transform: rotate(180deg)"
        >
          Du concept à l'impact
        </span>
        <div class="w-[2px] h-32 bg-[#131629] mt-4" data-aos="fade-up"></div>
      </div>

      <div class="flex-1 flex flex-col space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div
            class="w-full h-[200px] rounded-sm overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="/img/about.jpg"
              alt="Nerah Agency"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="flex flex-col justify-center px-2 sm:px-4">
            <h2
              class="text-2xl font-semibold text-[#131629] text-left mb-3 logo-type"
              data-aos="fade-up"
            >
              À propos de nous
            </h2>
            <p
              class="text-sm leading-relaxed text-[#131629]"
              data-aos="fade-up"
              style="text-align: justify"
            >
              Nerah Agency est une agence digitale spécialisée dans la création
              de solutions web et marketing innovantes. Nous accompagnons nos
              clients de la conception à la réalisation, en alliant créativité,
              performance et technologies de pointe, afin de transformer leurs
              idées en expériences digitales impactantes et mémorables. Notre
              équipe met un point d’honneur à comprendre vos besoins et à
              délivrer des solutions sur-mesure qui maximisent l’efficacité et
              la visibilité de votre marque.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in propos"
            :key="index"
            :class="[
              'rounded-sm p-6 transition-all duration-300 h-auto max-h-[200px]',
              index === 0
                ? 'bg-transparent shadow-none'
                : 'bg-[#131629] text-[#e0e5ea]',
            ]"
            data-aos="fade-up"
          >
            <h3
              :class="[
                'text-xl sm:text-2xl font-semibold mb-12',
                index === 0 ? 'text-[#131629]' : 'text-[#e0e5ea]',
              ]"
            >
              {{ item.title }}
            </h3>
            <p
              :class="[
                'text-sm leading-relaxed',
                index === 0 ? 'text-[#131629]' : 'text-gray-300',
              ]"
            >
              {{ item.details }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const propos = [
  {
    icon: "fas fa-bullseye",
    title: "Mission",
    details:
      "Notre mission est d’accompagner les entreprises dans leur transformation digitale en leur offrant des solutions personnalisées et performantes.",
  },
  {
    icon: "fas fa-eye",
    title: "Vision",
    details:
      "Nous visons l’excellence et l’innovation pour permettre à nos clients de se démarquer durablement dans un environnement compétitif.",
  },
  {
    icon: "fas fa-handshake",
    title: "Valeurs",
    details:
      "Chez Nerah Agency, l’Engagement, la Qualité, l’Excellence et la Collaboration guident chacun de nos projets.",
  },
];

const openedIndex = ref(null);

const toggle = (index) => {
  openedIndex.value = openedIndex.value === index ? null : index;
};
</script>

<style scoped>
.text-default {
  color: #131629;
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}

.logo-type {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}
</style>
