<template>
  <div class="flex flex-col items-center justify-center h-screen bg-[#e0e5ea] space-y-6">
    <div ref="animationContainer" class="w-64 h-64 -mb-6"></div>

    <h1 class="text-7xl font-pirulen text-[#131629] overflow-hidden whitespace-nowrap -mt-24 logo-type">
      NERAH
    </h1>

    <div class="-mt-12">
    <h2 class="text-lg font-medium uppercase text-[#131629] overflow-hidden whitespace-nowrap pl-8 tracking-widest agency -mt-8">
      Agency
    </h2>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import lottie from 'lottie-web'

const animationContainer = ref(null)
const router = useRouter()

onMounted(async () => {
  const animationData = (await import('~/utils/nerah_animation.json')).default

  if (!animationContainer.value) return

  const animation = lottie.loadAnimation({
    container: animationContainer.value,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData,
  })

  animation.addEventListener('complete', () => {
    router.push('/main')
  })
})
</script>


<style scoped>
.agency {
  letter-spacing: 30px; 
}

.logo-type {
  letter-spacing: 8px; 
    font-family: "Pirulen", sans-serif;
    letter-spacing: 2px;
    font-weight: normal;
  }

</style>