<template>
  <div>
    <input type="password" v-model="password" />
    {{ error }}
  </div>
</template>
<script setup>
import { computed, ref, defineProps } from "vue";

const password = ref("");

const props = defineProps(["passwordLength"]);

const error = computed(() => {
  if (props.passwordLength < 9) {
    return `password length should be grater than 8`;
  }
  return "";
});
</script>
<style scoped></style>
