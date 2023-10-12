import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
  }),

  actions: {
    getTasks(userId) {
      try {
        const data = axios.get(`http://localhost:3000/tasks?userId=${userId}`);
        if (data) {
          this.$state.tasks = data;
        }
      } catch (error) {
        alert("something went wrong please try again");
      }
    },
    addTask(payload) {
      try {
        const data = axios.post("http://localhost:3000/tasks", {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: new Date().valueOf(),
            title: payload.title,
            userId: payload.userId,
            completed: payload.completed,
          }),
        });

        this.$state.tasks = data;
      } catch (error) {
        alert("something went wrong please try again");
      }
    },
  },
});
