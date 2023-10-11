import { mount } from "@vue/test-utils";
import StoreCounter from "@/components/StoreCounter.vue";
test("vuex using mock store", async () => {
  const $store = {
    state: {
      count: 0,
    },
    commit: jest.fn(),
  };

  const wrapper = mount(StoreCounter, {
    global: {
      mocks: {
        $store,
      },
    },
  });

  expect(wrapper.html()).toContain("count:0");
  await wrapper.find("button").trigger("click");
  expect($store.commit).toHaveBeenCalled();
});
