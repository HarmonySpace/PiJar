<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "fill",
  },
});
const variantClass = new Map([
  [
    "fill",
    "text-finn-100 bg-finn-700 hover:bg-finn-600 transition-all duration-150",
  ],
  [
    "outlined",
    "text-finn-500 hover:text-finn-200 hover:bg-finn-950 border-finn-500 border-2 transition-all duration-150",
  ],
]);
const buttonClass = computed(() => {
  return variantClass.get(props.variant) || variantClass.get("fill");
});
</script>
<template>
  <button class="px-4 py-2 text-xl rounded-lg" :class="buttonClass">
    {{ props.text }}
  </button>
</template>
