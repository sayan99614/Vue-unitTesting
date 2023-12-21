<template>
  <div class="signup">
    <h2>Sign Up</h2>
    <form data-test="signupform" @submit.prevent="signup">
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          data-test="name"
          id="username"
          v-model="userData.username"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          data-test="email"
          id="email"
          v-model="userData.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          data-test="password"
          id="password"
          v-model="userData.password"
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
const { registerUser } = useUserStore();

const router = useRouter();

const userData = ref({
  id: new Date().valueOf(),
  username: "",
  email: "",
  password: "",
});

async function signup() {
  try {
    if (
      userData.value.email !== "" &&
      userData.value.password !== "" &&
      userData.value.username !== ""
    ) {
      const response = await registerUser(userData.value);
      if (response.status === "success") {
        router.replace("/");
      }
    }
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
.signup {
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
input[type="email"],
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
