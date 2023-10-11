import { createStore } from "vuex";
const createVuexStore = (initialValue) =>
  createStore({
    state: {
      count: 0,
      ...initialValue,
    },
    mutations: {
      increment(state, value = 1) {
        state.count += value;
      },
    },
  });

test("increment mutation without passing a value", () => {
  const store = createVuexStore();
  store.commit("increment");
  expect(store.state.count).toBe(1);
});

test("increment mutatuin with passing a value", () => {
  const store = createVuexStore({ count: 100 });
  store.commit("increment", 10);
  expect(store.state.count).toBe(110);
});
