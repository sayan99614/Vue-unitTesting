import { mount } from "@vue/test-utils";
import LoginComponent from "../../src/testingproject/components/LoginComponent.vue";
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
jest.spyOn(axios, "get").mockResolvedValue(mockUser);

test("it should call the login endpoint and update the store and move to home route", async () => {
  setActivePinia(createPinia());

  const loginWrapper = mount(LoginComponent);

  const userStore = useUserStore();

  expect(userStore.user).toEqual({});

  const email = `dheeman.p@simformsolutions.com`;

  loginWrapper.find('[data-test="email"]').setValue(email);
  loginWrapper.find('[data-test="password"]').setValue("Simform@123");

  await loginWrapper.find('[data-test="loginform"]').trigger("submit");

  expect(axios.get).toBeCalledTimes(1);
  expect(axios.get).toBeCalledWith(
    `http://localhost:3000/users?email=${email}`
  );

  expect(userStore.user).toEqual(mockUser.data[0]);
});
