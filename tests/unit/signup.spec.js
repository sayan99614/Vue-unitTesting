import { mount } from "@vue/test-utils";
import SignupComponent from "@/testingproject/pages/SignupComponent.vue";
import { createPinia, setActivePinia } from "pinia";
import { useUserStore } from "@/stores/user";
import axios from "axios";

jest.mock("vue-router", () => ({
  useRouter: jest.fn(() => ({
    push: () => {},
    replace: () => {},
  })),
}));

const mockUser = {
  data: [
    {
      email: "dheeman.p@simformsolutions.com",
      password: "Simform@123",
      id: 1,
      username: "dheeman",
    },
  ],
};
jest.spyOn(axios, "post").mockResolvedValue(mockUser);

test("it should call the signup endpoint and update the store and move to home route", async () => {
  setActivePinia(createPinia());

  const wrapper = mount(SignupComponent);

  const userStore = useUserStore();

  expect(userStore.user).toEqual({});

  await wrapper
    .find('[data-test="email"]')
    .setValue("dheeman.p@simformsolutions.com");
  await wrapper.find('[data-test="name"]').setValue("dheeman");
  await wrapper.find('[data-test="password"]').setValue("Simform@123");

  await wrapper.find('[data-test="signupform"]').trigger("submit");

  expect(axios.post).toBeCalledTimes(1);

  expect(axios.post).toBeCalledWith(
    `http://localhost:3000/users`,
    wrapper.vm.userData
  );

  expect(userStore.user).toEqual(mockUser.data[0]);
});
