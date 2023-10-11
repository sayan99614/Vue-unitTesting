<template>
  <div>
    <h1>welcome</h1>
    <aside><slot name="aside"></slot>></aside>
    <main><slot></slot></main>
    <header><slot name="head"></slot>></header>
    <p>
      <slot name="multiple"></slot>
    </p>

    <footer>thanks for visiting</footer>
  </div>
</template>
<script setup></script>
<style scoped></style>
