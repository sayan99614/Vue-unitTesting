import { App } from "@/components/RealRouting";
import { routes } from "@/router";
import { flushPromises, mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

test("routing", async () => {
  router.push("/");

  await router.isReady();

  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
  expect(wrapper.html()).toContain("welcome to the app");
});

test("routing to posts page", async () => {
  router.push("/");

  await router.isReady();

  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  expect(wrapper.html()).toContain("welcome to the app");

  await wrapper.find("a").trigger("click");
  await flushPromises();
  expect(wrapper.html()).toContain("Testing Vue Router");
});
