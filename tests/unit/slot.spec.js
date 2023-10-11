import { mount } from "@vue/test-utils";
import SlotComponent from "@/components/SlotComponent.vue";
import HeaderComp from "@/components/HeaderComp.vue";

test("it should render the item which is passed through slots", () => {
  const wrapper = mount(SlotComponent, {
    slots: {
      default: "<div>Hi I am dheeman</div>",
      aside: "<p>This is the content of the aside</p>",
      multiple: [`<p id="one">One</p>`, `<p id="two">two</p>`],
      head: HeaderComp,
    },
  });

  expect(wrapper.html()).toContain("<div>Hi I am dheeman</div>");
  expect(wrapper.html()).toContain("<p>This is the content of the aside</p>");
  expect(wrapper.html()).toContain("<div>header</div>");

  expect(wrapper.find("#one").exists()).toBe(true);
  expect(wrapper.find("#two").exists()).toBe(true);
});
