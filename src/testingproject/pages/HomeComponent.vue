<template>
  <teleport to="#task">
    <TaskModal v-if="createTaskVisibility" @close="taskStore.hideTaskForm">
      <TaskForm />
    </TaskModal>
  </teleport>

  <div v-if="!isLoggedIn">You have to login first to see your tasks</div>
  <div v-else class="task-row">
    <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/tsak";
import TaskCard from "../components/TaskCard";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import TaskModal from "../components/TaskModal.vue";
import TaskForm from "../components/TaskForm.vue";

const taskStore = useTaskStore();

const { isLoggedIn, user } = storeToRefs(useUserStore());

const { tasks, createTaskVisibility } = storeToRefs(taskStore);

onMounted(() => {
  if (isLoggedIn.value) {
    taskStore.getTasks(user.value.id);
  }
});
</script>

<style scoped>
.task-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 48px auto;
  flex-wrap: wrap;
}
</style>
