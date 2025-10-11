<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-[#e0e5ea] px-4 sm:px-6 md:px-8 space-y-4 sm:space-y-6"
  >
    <div
      ref="animationContainer"
      class="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 -mb-4 sm:-mb-6"
    ></div>

    <div
      class="flex flex-col items-center md:items-start -mt-6 sm:-mt-10 md:-mt-12"
    >
      <img
        src="/logo-type.png"
        alt="Nerah Agency"
        class="h-20 sm:h-28 md:h-32 w-auto object-contain"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import lottie from "lottie-web";

const animationContainer = ref(null);
const router = useRouter();

onMounted(async () => {
  const animationData = (await import("~/utils/nerah_animation.json")).default;

  if (!animationContainer.value) return;

  const animation = lottie.loadAnimation({
    container: animationContainer.value,
    renderer: "svg",
    loop: false,
    autoplay: true,
    animationData,
  });

  animation.addEventListener("complete", () => {
    router.push("/main");
  });
});
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
