<template>
  <div class="task-row">
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
  </div>
</template>

<script>
import TaskCard from "../components/TaskCard";
export default {
  components: {
    TaskCard,
  },
};
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
