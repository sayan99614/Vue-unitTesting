<template>
  <div>
    <button @click="redirect">Click to edit</button>
  </div>
</template>

<script>
export default {
  props: {
    isAuthenticated: Boolean,
  },
  methods: {
    redirect() {
      if (this.isAuthenticated) {
        this.$router.push(`/posts/${this.$route.params.id}/edit`);
      } else {
        this.$router.push("/404");
      }
    },
  },
};
</script>

<style scoped></style>
