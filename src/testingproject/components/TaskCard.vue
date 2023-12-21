<template>
  <div :class="['card', task.completed ? 'completed' : '']">
    <h1>{{ task.title }}</h1>
    <p data-test="taskStatus">
      <strong>Task status:</strong>
      {{ task.completed ? "Completed" : "Not Completed" }}
    </p>
    <input
      name="task"
      type="checkbox"
      data-test="taskCheck"
      class="pomocheck"
      :checked="task.completed"
      @change="() => completeTask(task)"
    />
    <div class="actions">
      <img
        @click="() => setEditedTask(task)"
        class="edit"
        src="@/assets/edit.svg"
        alt="edit icon"
      />
      <img
        @click="() => deleteTask(task.id)"
        class="delete"
        src="@/assets/delete.svg"
        alt="delete icon"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useTaskStore } from "@/stores/tsak";
const { deleteTask, completeTask, setEditedTask } = useTaskStore();

defineProps({
  task: Object,
});
</script>

<style scoped>
.card {
  background-color: #eee;
  width: 300px;
  height: 150px;
  padding: 24px;
  border-radius: 11px;
  border-bottom: 3px solid red;
  text-overflow: ellipsis;
  box-shadow: 3px 21px 36px -22px rgba(0, 0, 0, 0.43);
  position: relative;
}

.completed {
  border-bottom: 3px solid rgb(52, 177, 52);
}

.card h1 {
  font-size: 24px;
}
.pomocheck {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
}

.delete,
.edit {
  height: 24px;
  cursor: pointer;
  transition: all 0.3s;
}

.actions {
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  gap: 8px;
  overflow: hidden;
}

.delete:hover,
.edit:hover {
  scale: 120%;
}
</style>
