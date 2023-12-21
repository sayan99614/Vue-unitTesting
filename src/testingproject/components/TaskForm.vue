<template>
  <div class="task-creator">
    <h2>Create a Task</h2>
    <form data-test="task-form" @submit.prevent="createTask">
      <div class="form-group">
        <label for="taskName">Task Title:</label>
        <input
          type="text"
          id="taskName"
          v-model.trim="taskTitle"
          placeholder="Enter task name"
          data-test="task-title"
          required
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/tsak";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

const { user } = storeToRefs(useUserStore());
const { addTask, hideTaskForm } = useTaskStore();
const { taskToBeEdit } = storeToRefs(useTaskStore());

const taskTitle = ref("");

onMounted(() => {
  if (taskToBeEdit.value !== null) {
    taskTitle.value = taskToBeEdit.value.title;
  }
});

async function createTask() {
  try {
    await addTask({
      title: taskTitle.value,
      userId: user.value.id,
      completed: false,
    });
    hideTaskForm();
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
.task-creator {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
