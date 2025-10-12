<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: "ease-out-cubic",
    once: true,
    mirror: false,
  });
});

useHead({
  title: "Nerah Agency – Développement Web, Design et Marketing à Madagascar",
  meta: [
    {
      name: "description",
      content:
        "Nerah Agency, votre partenaire à Madagascar pour le développement web, design UI/UX, marketing digital et communication.",
    },
    {
      name: "keywords",
      content:
        "Nerah Agency, agence web Madagascar, développement site web, design UI/UX, marketing digital, communication",
    },
    { name: "robots", content: "index, follow" },

    // Open Graph pour réseaux sociaux
    {
      property: "og:title",
      content:
        "Nerah Agency - Développement Web, Design et Marketing à Madagascar",
    },
    {
      property: "og:description",
      content:
        "Nerah Agency, votre partenaire à Madagascar pour le développement web, design UI/UX, marketing digital et communication.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nerah-agency.vercel.app/" },
    {
      property: "og:image",
      content: "https://nerah-agency.vercel.app/logo.png",
    },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content:
        "Nerah Agency – Développement Web, Design et Marketing à Madagascar",
    },
    {
      name: "twitter:description",
      content:
        "Nerah Agency, votre partenaire à Madagascar pour le développement web, design UI/UX, marketing digital et communication.",
    },
    {
      name: "twitter:image",
      content: "https://nerah-agency.vercel.app/logo.png",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.boxicons.com/fonts/brands/boxicons-brands.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.boxicons.com/fonts/basic/boxicons.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
    },
    {
      rel: "preload",
      as: "font",
      href: "/font/Pirulen-Regular.otf",
      type: "font/otf",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.cdnfonts.com/css/pirulen",
    },
    {
      rel: "preload",
      as: "font",
      href: "/font/HelveticaNeueRoman.otf",
      type: "font/otf",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.cdnfonts.com/css/helvetica-neue-55",
    },
  ],
});
</script>

<style>
@font-face {
  font-family: "Pirulen";
  src: local("Pirulen"), url("/font/Pirulen-regular.otf") format("opentype"),
    url("/font/Pirulen-regular.woff2") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Helvetica";
  src: local("Helvetica Neue"),
    url("/font/HelveticaNeueRoman.otf") format("opentype"),
    url("https://fonts.cdnfonts.com/s/14760/HelveticaNeue.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-thumb {
  background-color: #e0e5ea;
  border-radius: 10px;
}
</style>
