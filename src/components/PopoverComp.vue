<template>
  <div class="popover" v-if="isOpen">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PopoverComp",
  props: {
    isOpen: Boolean,
  },
  emits: ["closePopover"],
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.addEventListener("click", this.handleClickOutside);
      } else {
        document.removeEventListener("click", this.handleClickOutside);
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    handleClickOutside(event) {
      if (this.isOpen && !this.$el.contains(event.target)) {
        this.$emit("closePopover");
      }
    },
  },
};
</script>

<style scoped>
.popover {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
