<script setup lang="ts">
const props = defineProps({
  bg_banner: {
    type: String,
    default:
      "bg-gradient-to-tr to-finn-500 via-medium-purple-950 from-neutral-950",
  },
});
const bannerClass =
  props.bg_banner ||
  "bg-gradient-to-tr to-finn-500 via-medium-purple-950 from-neutral-950";
</script>
<template>
  <section class="flex flex-col justify-center items-center bg-neutral-950">
    <div
      class="w-full min-h-screen flex justify-center md:justify-between items-center"
    >
      <div
        class="hidden md:block basis-4/6 w-full h-screen rounded-e-[2rem]"
        :class="bannerClass"
      ></div>
      <div
        class="w-10/12 sm:basis-2/6 h-full flex flex-col items-center justify-center"
      >
        <div class="max-w-md space-y-8">
          <div class="w-full flex flex-col items-center justify-center">
            <p class="text-center text-xl text-finn-500">Oink!</p>
            <h1 class="text-center text-6xl text-finn-100">
              <slot name="title" />
            </h1>
            <br />
          </div>
          <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <slot name="form" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
