<template>
  <div>
    <button @click="onClick">Click me</button>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";
const count = ref(0);

const emit = defineEmits(["increment,complexEvent"]);

const onClick = () => {
  count.value = count.value + 1;
  emit("increment", count.value);
  emit("complexEvent", {
    count: count.value,
    isEven: count.value % 2 === 0,
  });
};
</script>
<style scoped></style>
