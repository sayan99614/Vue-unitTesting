import TaskCard from "@/testingproject/components/TaskCard.vue";
import axios from "axios";
import { setActivePinia, createPinia } from "pinia";
import { useTaskStore } from "@/stores/tsak";
import { mount } from "@vue/test-utils";
const mockTasks = {
  status: 200,
  data: [
    {
      id: 1,
      title: "create a demo project",
      userId: 1,
      completed: false,
    },
  ],
};

jest.spyOn(axios, "patch").mockResolvedValue({
  data: { ...mockTasks.data[0], completed: true },
  status: mockTasks.status,
});

test("update task status when clicking on checkbox", async () => {
  setActivePinia(createPinia());
  const taskStore = useTaskStore();

  taskStore.tasks = mockTasks;
  const wrapper = mount(TaskCard, {
    props: {
      task: {
        id: 1,
        title: "create a demo project",
        completed: false,
      },
    },
  });

  expect(wrapper.find('[data-test="taskStatus"]').text()).toContain(
    "Not Completed"
  );

  await wrapper.find('[data-test="taskCheck"]').setValue();

  expect(axios.patch).toBeCalledTimes(1);
  expect(axios.patch).toBeCalledWith("http://localhost:3000/tasks/1", {
    completed: true,
  });

  expect(wrapper.find('[data-test="taskStatus"]').text()).toContain(
    "Completed"
  );
});
