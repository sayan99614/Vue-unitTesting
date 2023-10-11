<template>
  <div class="card">
    <h1>Sample task name</h1>
    <p><strong>Task status:</strong> Not Completed</p>
    <input name="task" type="checkbox" class="pomocheck" />
  </div>
</template>

<script>
export default {};
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
</style>
