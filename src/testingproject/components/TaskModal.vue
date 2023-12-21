<!-- Modal.vue -->
<template>
  <div class="modal">
    <div class="modal-content">
      <img
        class="close"
        @click="closeModal"
        src="@/assets/close.svg"
        alt="close"
      />

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close"); // Emit a custom event to indicate that the modal should be closed
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  padding-top: 32px;
}

.close {
  position: absolute;
  width: 28px;
  height: 28px;
  top: 4px;
  right: 2px;
  cursor: pointer;
}
</style>
