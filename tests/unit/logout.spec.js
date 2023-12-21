import { RouterLinkStub, mount } from "@vue/test-utils";
import HeaderComponent from "@/testingproject/components/HeaderComponent.vue";
import { createPinia, setActivePinia } from "pinia";
import { useUserStore } from "@/stores/user";

jest.mock("vue-router", () => ({
  useRoute: jest.fn(),
  useRouter: jest.fn(() => ({
    push: () => {},
    replace: () => {},
  })),
}));

const mockUser = {
  id: 1,
  email: "dheeman.p@simformsolutions.com",
  username: "dheeman",
  password: "Simform@123",
};

test("it should show logout link when there is user logged in", async () => {
  setActivePinia(createPinia());
  const userStore = useUserStore();

  userStore.user = mockUser;
  userStore.isLoggedIn = true;
  const wrapper = mount(HeaderComponent, {
    components: {
      "router-link": RouterLinkStub,
    },
  });

  expect(wrapper.find('[data-test="logout"]').exists()).toBe(true);

  await wrapper.find('[data-test="logout"]').trigger("click");

  expect(wrapper.find('[data-test="logout"]').exists()).toBe(false);

  expect(userStore.user).toEqual({});
});
