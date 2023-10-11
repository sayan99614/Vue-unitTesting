import { Component } from "@/components/RouerWithCompostion";
import { mount } from "@vue/test-utils";
// eslint-disable-next-line no-unused-vars
import { useRoute, useRouter } from "vue-router";

jest.mock("vue-router", () => ({
  useRoute: jest.fn(),
  useRouter: jest.fn(() => ({
    push: () => {},
  })),
}));

test("allows authenticated user to edit post", async () => {
  useRoute.mockImplementationOnce(() => ({
    params: {
      id: 1,
    },
  }));
  const push = jest.fn();
  useRouter.mockImplementationOnce(() => ({
    push,
  }));

  const wrapper = mount(Component, {
    props: {
      isAuthenticated: true,
    },
    global: {
      stubs: ["router-link", "router-view"],
    },
  });

  await wrapper.find("button").trigger("click");

  expect(push).toHaveBeenCalledTimes(1);
  expect(push).toHaveBeenLastCalledWith("/posts/1/edit");
});

test("redirect un authenticated users to 404", async () => {
  useRoute.mockImplementationOnce(() => ({
    params: {
      id: 1,
    },
  }));

  const push = jest.fn();

  useRouter.mockImplementationOnce(() => ({
    push,
  }));

  const wrapper = mount(Component, {
    props: {
      isAuthenticated: false,
    },
    global: {
      stubs: ["router-link", "router-view"],
    },
  });

  await wrapper.find("button").trigger("click");

  expect(push).toHaveBeenCalledTimes(1);

  expect(push).toHaveBeenCalledWith("/404");
});
