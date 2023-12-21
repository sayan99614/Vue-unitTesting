import { defineStore } from "pinia";

import { useUserStore } from "./user";
import axios from "axios";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
    createTaskVisibility: false,
    taskToBeEdit: {},
  }),

  actions: {
    showTaskForm() {
      this.createTaskVisibility = true;
    },

    hideTaskForm() {
      this.createTaskVisibility = false;
      this.taskToBeEdit = {};
    },

    async getTasks(userId) {
      try {
        const data = await axios.get(
          `http://localhost:3000/tasks?userId=${userId}`
        );

        if (data && data.data) {
          this.$state.tasks = data.data;
        }
      } catch (error) {
        alert("something went wrong please try again");
      }
    },
    async addTask(payload) {
      try {
        let response;

        if (
          Object.keys(this.taskToBeEdit).length === 0 &&
          this.taskToBeEdit.constructor === Object
        ) {
          response = await axios.post("http://localhost:3000/tasks", {
            id: new Date().valueOf(),
            title: payload.title,
            userId: payload.userId,
            completed: payload.completed,
          });
          this.tasks = [...this.tasks, response.data];
        } else {
          response = await axios.patch(
            `http://localhost:3000/tasks/${this.taskToBeEdit.id}`,
            {
              title: payload.title,
            }
          );
          await this.getTasks(payload.userId);
          this.taskToBeEdit = null;
        }
      } catch (error) {
        alert("something went wrong please try again");
      }
    },

    async deleteTask(taskId) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/tasks/${taskId}`
        );

        if (response.status === 200) {
          const { getUser } = useUserStore();
          const { id } = getUser;
          await this.getTasks(id);
        } else {
          throw new Error("Can't delete at this moment");
        }
      } catch (error) {
        alert(error.message);
      }
    },

    async completeTask(task) {
      try {
        const response = await axios.patch(
          `http://localhost:3000/tasks/${task.id}`,
          {
            completed: !task.completed,
          }
        );

        if (response.status === 200) {
          const { getUser } = useUserStore();
          const { id } = getUser;
          await this.getTasks(id);
        } else {
          throw new Error("Can't modify task at this moment");
        }
      } catch (error) {
        alert(error.message);
      }
    },

    setEditedTask(payload) {
      this.taskToBeEdit = payload;
      this.showTaskForm();
    },
  },
});
