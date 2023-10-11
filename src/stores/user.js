import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    async registerUser(payload) {
      try {
        const response = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: new Date().valueOf(),
            username: payload.username,
            email: payload.email,
            password: payload.password,
          }),
        });
        const data = await response.json();
        if (data.length > 0) {
          this.$state.user = data[0];
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
        const response = await fetch(
          `http://localhost:3000/users?email=${email}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();

        if (data.length > 0 && data[0].password === password) {
          this.$state.user = data[0];

          return { status: "success", data: data[0] };
        } else {
          throw new Error("Invalid password please try again");
        }
      } catch (error) {
        return { status: "error", error: error.message };
      }
    },
  },
});
