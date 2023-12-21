import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
    isLoggedIn: false,
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    setLoggedIn(data) {
      this.isLoggedIn = data;
    },

    async registerUser(payload) {
      try {
        const response = await axios.post("http://localhost:3000/users", {
          id: payload.id,
          username: payload.username,
          email: payload.email,
          password: payload.password,
        });
        const data = response.data;
        if (data.length > 0) {
          this.$state.user = data[0];
          this.$state.isLoggedIn = true;
          return { status: "success", data };
        } else {
          throw new Error("something went wrong please try again later");
        }
      } catch (error) {
        return { status: "error", error: error.message };
      }
    },

    async loginUser(email, password) {
      try {
        const response = await axios.get(
          `http://localhost:3000/users?email=${email}`
        );
        const data = response.data;

        if (data && data.length > 0 && data[0].password === password) {
          this.$state.user = data[0];
          this.$state.isLoggedIn = true;

          return { status: "success", data: data[0] };
        } else {
          throw new Error("Invalid password please try again");
        }
      } catch (error) {
        return { status: "error", error: error.message };
      }
    },

    logoutUser() {
      this.user = {};
      this.isLoggedIn = false;
      return;
    },
  },
});
