import { mount } from "@vue/test-utils";
import { h } from "vue";
import { defineComponent, inject } from "vue";
import CheckProvide from "@/components/CheckProvide.vue";

test("provides correct data", () => {
  const TestComponent = defineComponent({
    template: `<div id="provide-test">{{value}}</div>`,
    setup() {
      const value = inject("name");
      return { value };
    },
  });

  const wrapper = mount(CheckProvide, {
    slots: {
      default: () => h(TestComponent),
    },
  });

  console.log("🎟 👎 🧑 ", wrapper.get("#provide-test").text());

  expect(wrapper.get("#provide-test").text()).toBe("dheeman pati");
});
