<template>
  <div class="flex flex-col items-center justify-center h-screen bg-[#e0e5ea] space-y-6">
    <div ref="animationContainer" class="w-64 h-64 -mb-6"></div>

    <div class="flex flex-col items-center md:items-start -mt-12">
        <img src="/logo-type.png" alt="Nerah Agency" class="h-32 w-auto" />
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