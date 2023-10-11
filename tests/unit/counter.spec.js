import { mount } from "@vue/test-utils";
import CounterComp from "@/components/CounterComp.vue";
test("it should increment the value of count when a button clicks", () => {
  const wrapper = mount(CounterComp);

  wrapper.find("button").trigger("click");
  wrapper.find("button").trigger("click");

  const incrementEvent = wrapper.emitted("increment");

  expect(incrementEvent).toHaveLength(2);

  expect(incrementEvent[0]).toEqual([1]);
  expect(incrementEvent[1]).toEqual([2]);
});

test("it should increment the value of count when a button clicks", () => {
  const wrapper = mount(CounterComp);

  wrapper.find("button").trigger("click");
  wrapper.find("button").trigger("click");

  expect(wrapper.emitted("complexEvent")).toHaveLength(2);

  expect(wrapper.emitted("complexEvent")[0]).toEqual([
    {
      count: 1,
      isEven: false,
    },
  ]);
  expect(wrapper.emitted("complexEvent")[1]).toEqual([
    {
      count: 2,
      isEven: true,
    },
  ]);
});
