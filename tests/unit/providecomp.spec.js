import CheckProvideParent from "@/components/CheckProvideParent.vue";
import { mount } from "@vue/test-utils";
import { defineComponent, inject } from "vue";

test("it should provide the value", () => {
  const TestComponent = defineComponent({
    template: `<div id="name-test">{{value}}</div>`,
    setup() {
      const value = inject("name");
      return { value };
    },
  });

  const wrapper = mount(CheckProvideParent, {
    global: {
      stubs: {
        CheckProvideChild: TestComponent,
      },
    },
  });

  expect(wrapper.get("#name-test").text()).toBe("dheeman pati");
});
