import { mount } from "@vue/test-utils";
import PasswordComp from "@/components/PasswordComp.vue";
test("it should give error if password length less than 8", async () => {
  const wrapper = mount(PasswordComp);

  await wrapper.setProps({ passwordLength: 8 });

  expect(wrapper.html()).toContain("password length should be grater than 8");

  await wrapper.setProps({ passwordLength: 9 });

  expect(wrapper.html()).toContain("");
});
