<template>
  <div>
    <button @click="increment">increment</button>
    count:{{ count }}
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style scoped></style>
