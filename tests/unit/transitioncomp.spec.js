import { mount } from "@vue/test-utils";
import TransitionsComp from "@/components/TransitionsComp.vue";
test("it should render the text after clicking the button", async () => {
  const wrapper = mount(TransitionsComp);
  expect(wrapper.find("p").exists()).toBe(false);
  await wrapper.find("button").trigger("click");
  expect(wrapper.find("p").text()).toEqual("My name is dheeman");
});
