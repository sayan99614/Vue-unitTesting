import { Editor } from "@/components/Editor";
import { mount } from "@vue/test-utils";

test("modelvalue should be updated", async () => {
  const wrapper = mount(Editor, {
    props: {
      label: "email",
      modelValue: "initialValue",
      "onUpdate:modelValue": (e) => wrapper.setProps({ modelValue: e }),
    },
  });

  await wrapper.setValue("dheeman pati");

  expect(wrapper.props("modelValue")).toBe("dheeman pati");
});
