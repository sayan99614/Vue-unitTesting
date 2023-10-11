<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          v-model="userCredentials.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="userCredentials.password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";

const { loginUser } = useUserStore();

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const userCredentials = ref({
  email: "",
  password: "",
});

async function login() {
  let response;
  try {
    if (
      userCredentials.value.email !== "" &&
      userCredentials.value.password !== ""
    ) {
      response = await loginUser(
        userCredentials.value.email,
        userCredentials.value.password
      );
    }

    if (response.status === "success") {
      router.replace("/");
    } else {
      alert(response.error);
    }
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
.login {
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

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
