<template>
  <div>
    <label for="input">{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
defineProps(["label", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>
<style scoped></style>
