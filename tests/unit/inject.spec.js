import { mount } from "@vue/test-utils";
import CheckInject from "@/components/CheckInject.vue";

test("it should inject the provided value", () => {
  const wrapper = mount(CheckInject, {
    global: {
      provide: {
        message: "sayan",
      },
    },
  });

  expect(wrapper.find("#data-test").text()).toBe("sayan");
});
