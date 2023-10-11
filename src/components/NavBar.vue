<template>
  <Teleport to="#modal">
    <SignUp />
  </Teleport>
</template>

<script>
import { defineComponent } from "vue";
import SignUp from "./SignUp.vue";

export default defineComponent({
  components: {
    SignUp,
  },
});
</script>
