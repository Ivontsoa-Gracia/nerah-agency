<template>
    <div class="flex flex-col bg-white/5 backdrop-blur-md py-4 px-6 rounded-lg space-y-1">
      <div class="flex items-start">
        <div class="text-secondary text-2xl mr-4 mt-1">
          <i :class="icon"></i>
        </div>
        <div>
          <h4 class="text-default font-medium">{{ title }}</h4>
          <div class="text-gray-300 text-thin">
            <p v-for="(line, index) in texts" :key="index">{{ line }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    icon: String,
    title: String,
    texts: {
      type: Array,
      default: () => []
    }
  });
  </script>
  