<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">My App</router-link>
      </div>
      <ul>
        <li data-test="navlinks"><router-link to="/">Home</router-link></li>
        <li data-test="navlinks" v-if="!isLoggedIn">
          <router-link to="/login">Login</router-link>
        </li>
        <li data-test="navlinks" v-if="!isLoggedIn">
          <router-link to="/signup">Signup</router-link>
        </li>
        <li data-test="task" v-if="isLoggedIn">
          <router-link to="/task">Create Task</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { computed } from "vue";

const userStore = useUserStore();

const isLoggedIn = computed(() => userStore.isLoggedIn);
</script>

<style scoped>
/* Base styles for the header */
header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  width: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
}

.logo {
  font-size: 24px;
}

ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

li {
  font-size: 18px;
  cursor: pointer;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Media query for screens with a maximum width of 768px */
@media (max-width: 768px) {
  .logo {
    font-size: 18px;
  }

  ul {
    flex-direction: column;
    gap: 10px;
  }

  li {
    font-size: 16px;
  }
}
</style>
