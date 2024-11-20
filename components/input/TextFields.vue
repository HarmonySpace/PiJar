<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  valueRef: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "password",
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
});
const inputRef = ref();
if (props.valueRef) {
  inputRef.value = props.valueRef;
}
const emit = defineEmits(["update"]);
const handleInput = () => {
  emit("update", inputRef.value);
};
//const emit = defineEmits(["update:valueRef"]);
//const handleInput = (event: Event) => {
//  const target = event.target as HTMLInputElement;
//  emit("update:valueRef", target.value);
//};
</script>

<template>
  <div class="flex flex-col">
    <label :for="props.id" class="text-2xl text-neutral-300">{{
      props.label
    }}</label>
    <input
      :id="props.id"
      :type="props.type"
      :required="props.required"
      :placeholder="props.placeholder"
      v-model="inputRef"
      @input="handleInput()"
      class="mt-4 w-full px-4 py-2 text-neutral-400 text-2xl bg-neutral-900 rounded-lg border-2 border-neutral-800 focus:border-finn-800 focus:outline-none focus:ring-0 placeholder:text-neutral-600"
    />
  </div>
</template>
