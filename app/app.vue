<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
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
  src: local("Pirulen"), url("/font/Pirulen-Regular.otf") format("opentype"),
    url("https://fonts.cdnfonts.com/s/17951/Pirulen.woff") format("woff");
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

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #d0d0d0;
  border-radius: 10px;
}
</style>
