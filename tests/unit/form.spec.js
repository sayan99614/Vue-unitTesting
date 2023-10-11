import { mount } from "@vue/test-utils";
import UserForm from "@/components/UserForm.vue";
import CustomInput from "@/components/CustomInput.vue";

test("form should submit event", async () => {
  const wrapper = mount(UserForm);
  const email = "dheemanpati53@gmail.com";
  const description = "this is the sample description";
  const city = "moscow";
  const subscribe = true;
  const name = "dheeman pati";
  await wrapper.find("input[type=email]").setValue(email);
  await wrapper.find("textarea").setValue(description);
  await wrapper.find("select").setValue(city);
  await wrapper.find("input[type=checkbox]").setValue();
  await wrapper.find("input[type=radio][value=monthly]").setValue();

  await wrapper.find("form").trigger("submit.prevent");

  wrapper.getComponent(CustomInput).get("input").setValue(name);

  expect(wrapper.emitted("submit")[0][0]).toStrictEqual({
    email,
    description,
    city,
    subscribe,
    interval: "monthly",
    name,
  });
});
