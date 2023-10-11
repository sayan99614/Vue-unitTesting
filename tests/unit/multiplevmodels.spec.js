import { mount } from "@vue/test-utils";
import MultipleVmodels from "@/components/MultipleVmodels.vue";
test("multiple vModel should be update", async () => {
  const wrapper = mount(MultipleVmodels, {
    props: {
      name: "dheeman pati",
      age: "23",
      currency: "rupee",
      "onUpdate:name": (e) => wrapper.setProps({ name: e }),
      "onUpdate:age": (e) => wrapper.setProps({ age: e }),
      "onUpdate:currency": (e) => wrapper.setProps({ currency: e }),
    },
  });

  const [nameInput, ageInput, currencyInput] = wrapper.findAll("input");

  await nameInput.setValue("sayan");
  await ageInput.setValue("23");
  await currencyInput.setValue("dollar");

  expect(wrapper.props("name")).toBe("sayan");
  expect(wrapper.props("age")).toBe("23");
  expect(wrapper.props("currency")).toBe("dollar");
});
