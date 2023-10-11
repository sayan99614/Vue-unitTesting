import { mount } from "@vue/test-utils";
import ConditionalRendering from "@/components/ConditionalRendering.vue";

test("it should render my profile", () => {
  const wrapper = mount(ConditionalRendering);

  expect(wrapper.get("#profile").text()).toEqual("myProfile");
});

test("it should't render admin by default", () => {
  const wrapper = mount(ConditionalRendering);

  expect(wrapper.find("#admin").exists()).toBe(false);
});

test("it should not visible the super user", () => {
  const wrapper = mount(ConditionalRendering);
  expect(wrapper.find("#superuser").isVisible()).toBe(false);
});
