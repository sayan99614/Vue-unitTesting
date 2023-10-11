<template>
  <div>
    <ul>
      <li id="profile">myProfile</li>
      <li id="admin" v-if="isAdmin">Admin</li>
      <li id="superuser" v-show="isSuperUser">superUser</li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";

const isAdmin = ref(false);
const isSuperUser = ref(false);
</script>
<style scoped></style>
