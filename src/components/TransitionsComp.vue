<template>
  <button @click="toggle">Click me !</button>

  <Transition name="fade">
    <p v-if="show">My name is dheeman</p>
  </Transition>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const show = ref(false);

    const toggle = () => {
      show.value = !show.value;
    };

    return {
      show,
      toggle,
    };
  },
};
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
