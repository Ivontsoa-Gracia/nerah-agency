<template>
    <div class="relative w-full h-screen bg-[#10b481] overflow-hidden flex items-center justify-center">
      <!-- Route animation -->
      <div class="relative w-64 h-32">
        <!-- Camion -->
        <div
          class="absolute w-40 h-20 bg-[#222831] rounded-lg flex items-center justify-center text-white font-bold shadow-lg animate-truck"
        >
          Truck
        </div>
  
        <!-- Produits -->
        <div class="absolute top-0 left-0 w-10 h-10 bg-yellow-400 rounded-md animate-box"></div>
        <div class="absolute top-0 left-0 w-10 h-10 bg-red-500 rounded-md animate-box delay-500"></div>
        <div class="absolute top-0 left-0 w-10 h-10 bg-green-500 rounded-md animate-box delay-1000"></div>
      </div>
  
      <!-- Optional Text -->
      <h1 class="absolute bottom-20 text-white text-3xl font-bold">SmartSaha Marketplace</h1>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  onMounted(() => {
    // Redirection après 5 secondes
    setTimeout(() => {
      router.push("/market");
    }, 5000);
  });
  </script>
  
  <style scoped>
  /* Animation du camion */
  @keyframes truckMove {
    0% {
      transform: translateX(-150%);
    }
    100% {
      transform: translateX(150%);
    }
  }
  
  .animate-truck {
    animation: truckMove 5s linear forwards;
  }
  
  /* Animation des produits */
  @keyframes boxMove {
    0% {
      transform: translateY(-100%) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: translateY(0) rotate(10deg);
      opacity: 1;
    }
    100% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
  }
  
  .animate-box {
    animation: boxMove 1s ease forwards;
  }
  
  .delay-500 {
    animation-delay: 0.5s;
  }
  
  .delay-1000 {
    animation-delay: 1s;
  }
  </style>
  