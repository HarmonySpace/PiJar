<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Alerta",
  },
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["close"]);
const show = ref(false);
watch(
  () => props.show,
  () => {
    show.value = props.show;
  },
);
const close = () => {
  show.value = false;
  emit("close");
};
</script>
<template>
  <div
    v-show="show"
    class="px-5 py-3 max-w-96 flex flex-col items-start justify-center bg-finn-950 rounded-xl"
  >
    <div class="w-full flex items-center justify-between">
      <h1 class="text-lg font-bold text-start">
        <slot name="title" />
      </h1>
      <LucideX @click="close()" class="stroke-finn-600 hover:cursor-pointer" />
    </div>
    <div class="basis-1/4 flex">
      <slot name="icon" />
    </div>
    <div class="basis-3/4 text-start">
      <slot />
    </div>
  </div>
</template>
