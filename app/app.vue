<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.boxicons.com/fonts/brands/boxicons-brands.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.boxicons.com/fonts/basic/boxicons.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    },
  ]
})
</script>
<style>
@font-face {
  font-family: 'Pirulen';
  src: url('/font/Pirulen-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
    font-family: 'Helvetica';
    src: url('/font/HelveticaNeueRoman.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #d0d0d0;
  border-radius: 10px;
}
</style>
