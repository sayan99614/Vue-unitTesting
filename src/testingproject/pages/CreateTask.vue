<template>
  <div class="task-creator">
    <h2>Create a Task</h2>
    <form @submit.prevent="addTask">
      <div class="form-group">
        <label for="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          v-model.trim="newTask"
          placeholder="Enter task name"
          required
        />
      </div>
      <button type="submit" :disabled="!newTask.trim()">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === "") {
        return; // Prevent adding empty tasks
      }

      // Emit an event to the parent component with the new task
      this.$emit("task-added", this.newTask);

      // Clear the input field
      this.newTask = "";
    },
  },
};
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
