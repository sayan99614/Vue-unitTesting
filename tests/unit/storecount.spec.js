import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import StoreCounter from "@/components/StoreCounter.vue";

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
});

test("vuex", async () => {
  const wrapper = mount(StoreCounter, {
    global: {
      plugins: [store],
    },
  });

  await wrapper.find("button").trigger("click");
  expect(wrapper.html()).toContain("count:1");
  expect(store.state.count).toBe(1);
});
