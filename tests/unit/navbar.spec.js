import { mount, RouterLinkStub } from "@vue/test-utils";
import HeaderComponent from "@/testingproject/components/HeaderComponent.vue";
import { createTestingPinia } from "@pinia/testing";

import { useUserStore } from "@/stores/user";
import { createPinia, setActivePinia } from "pinia";
import { nextTick } from "vue";

jest.mock("vue-router", () => ({
  useRoute: jest.fn(),
  useRouter: jest.fn(() => ({
    push: () => {},
  })),
}));

test("it should show login and signup option before login", () => {
  const wrapper = mount(HeaderComponent, {
    global: {
      plugins: [createTestingPinia()],
      components: {
        "router-link": RouterLinkStub,
      },
    },
  });
  const navlinks = wrapper.findAll('[data-test="navlinks"]');

  expect(navlinks).toHaveLength(3);
  expect(navlinks[0].text()).toBe("Home");
  expect(navlinks[1].text()).toBe("Login");
  expect(navlinks[2].text()).toBe("Signup");
});

test("it should show create task option after login", async () => {
  setActivePinia(createPinia());

  const header = mount(HeaderComponent, {
    global: {
      components: {
        "router-link": RouterLinkStub,
      },
    },
  });
  const userStore = useUserStore();

  expect(header.findAll('[data-test="navlinks"]')).toHaveLength(3);

  userStore.isLoggedIn = true;

  await nextTick();

  expect(header.find('[data-test="task"]').exists()).toBe(true);
});
