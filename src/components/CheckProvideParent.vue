<template>
  <CheckProvideChild />
</template>

<script>
import CheckProvideChild from "./CheckProvideChild.vue";
export default {
  provide: {
    name: "dheeman pati",
  },
  components: {
    CheckProvideChild,
  },
};
</script>

<style scoped></style>
