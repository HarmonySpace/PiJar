<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Alerta",
  },
});
</script>
<template>
  <div class="px-5 py-3 flex flex-col items-start justify-center bg-finn-950">
    <h1 class="text-lg font-bold text-start">
      <slot name="title" />
    </h1>
    <div class="basis-1/4 flex">
      <slot name="icon" />
    </div>
    <div class="basis-3/4 text-start">
      <slot />
    </div>
  </div>
</template>
