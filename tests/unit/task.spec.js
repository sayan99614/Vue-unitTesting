import { mount } from "@vue/test-utils";
import HomeComponent from "@/testingproject/pages/HomeComponent.vue";
import axios from "axios";
import { setActivePinia, createPinia } from "pinia";
import TaskModal from "@/testingproject/components/TaskModal.vue";

import { useTaskStore } from "@/stores/tsak";
import { useUserStore } from "@/stores/user";

beforeEach(() => {
  const el = document.createElement("div");
  el.id = "task";
  document.body.appendChild(el);
});

afterEach(() => {
  document.body.outerHTML = "";
});

const mockTask = {
  data: {
    id: 1,
    title: "sample task 1",
    userId: 1,
    completed: false,
  },
};

const mockTaskPatch = {
  data: {
    id: 1,
    title: "sample task updated",
    userId: 1,
    completed: true,
  },
};

jest.spyOn(axios, "post").mockResolvedValue(mockTask);
jest.spyOn(axios, "patch").mockResolvedValue(mockTaskPatch);
jest.spyOn(axios, "get").mockResolvedValue([mockTask.data]);

test("when create task it should call api and update store", async () => {
  setActivePinia(createPinia());
  const taskStore = useTaskStore();
  const userStore = useUserStore();

  taskStore.createTaskVisibility = true;
  taskStore.taskToBeEdit = null;
  userStore.user = { id: 1 };

  const wrapper = mount(HomeComponent);
  const taskModel = wrapper.getComponent(TaskModal);

  await taskModel.find('[data-test="task-title"]').setValue("sample task one");

  await taskModel.find('[data-test="task-form"]').trigger("submit");

  expect(axios.post).toBeCalledTimes(1);
  expect(taskStore.tasks[0]).toEqual(mockTask.data);
});

test("edit task", async () => {
  setActivePinia(createPinia());
  const taskStore = useTaskStore();
  taskStore.createTaskVisibility = true;
  taskStore.taskToBeEdit = {
    id: 1,
    title: "sample task",
    userId: 1,
    completed: false,
  };
  const userStore = useUserStore();

  userStore.user = { id: 1 };

  const wrapper = mount(HomeComponent);
  const taskModel = wrapper.getComponent(TaskModal);

  await taskModel.find('[data-test="task-title"]').setValue("sample task one");
  await taskModel.find('[data-test="task-form"]').trigger("submit");

  const userId = taskStore.taskToBeEdit.id;

  expect(axios.patch).toBeCalledTimes(1);
  expect(axios.patch).toBeCalledWith(`http://localhost:3000/tasks/${userId}`, {
    title: "sample task one",
  });
  expect(axios.get).toBeCalledTimes(1);
  expect(axios.get).toBeCalledWith(
    `http://localhost:3000/tasks?userId=${userId}`
  );
});
