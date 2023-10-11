<template>
  <h4>Floating vue got bugged black border reproduce sample</h4>
  <p>
    The issue gets more serious here even if I did not refresh the page the
    black border exists!
  </p>
  <VMenu
    :triggers="['click']"
    :showTriggers="(triggers) => [...triggers, 'click']"
    :hideTriggers="(triggers) => [...triggers, 'click']"
    :skidding="0"
    :placement="'top-end'"
    popper-class="pop-er"
  >
    <button>Check me out!</button>
    <template #popper>
      <div style="padding: 1rem">Help Me</div>
    </template>
  </VMenu>
</template>

<script>
import { Menu as VMenu } from "floating-vue";
import "floating-vue/dist/style.css";

export default {
  name: "App",
  components: {
    VMenu,
  },
};
</script>
<style lang="css">
.v-popper__arrow-container {
  display: none;
}
</style>
