<template>
  <div class="min-h-screen bg-white text-black overflow-y-hidden">
    <Hero />
    <section id="about">
      <About />
    </section>
    <section id="services">
      <Service />
    </section>
    <Portfolio />
    <Valeur />
    <section id="contact">
    <Contact />
    </section>
    <Action />
    <Footer />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";
import Service from "~/components/Service.vue";
import Portfolio from "~/components/Portfolio.vue";
import Valeur from "~/components/Valeur.vue";
import Contact from "~/components/Contact.vue";
import Action from "~/components/Action.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
.link {
  @apply text-white hover:text-gray-300 transition duration-300;
}
.logo-type {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}
</style>
