import useUser from "@/composables/useUser";
import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";
import { defineComponent } from "vue";

test("it should get user from the api", async () => {
  jest.spyOn(axios, "get").mockResolvedValue({ data: { id: 1, name: "User" } });

  const sampleComponent = defineComponent({
    template: null,

    props: {
      userId: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      return {
        ...useUser(props.userId),
      };
    },
  });

  const wrapper = mount(sampleComponent, {
    props: {
      userId: 1,
    },
  });

  expect(wrapper.vm.user).toBeUndefined();

  await flushPromises();

  expect(wrapper.vm.user).toEqual({ id: 1, name: "User" });
});
