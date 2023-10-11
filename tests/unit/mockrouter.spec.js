import { mount } from "@vue/test-utils";
import RouterComponentTesting from "@/components/RouterComponentTesting.vue";

test("it should redirect to edit post if user is authenticated", async () => {
  const mockRoute = {
    params: {
      id: 1,
    },
  };
  const mockRouter = {
    push: jest.fn(),
  };

  const wrapper = mount(RouterComponentTesting, {
    props: {
      isAuthenticated: true,
    },
    global: {
      mocks: {
        $router: mockRouter,
        $route: mockRoute,
      },
    },
  });

  await wrapper.find("button").trigger("click");

  expect(mockRouter.push).toHaveBeenCalledTimes(1);
  expect(mockRouter.push).toHaveBeenCalledWith("/posts/1/edit");
});

test("redirect an unauthorized user to 404 page", async () => {
  const mockRoute = {
    params: {
      id: 1,
    },
  };
  const mockRouter = {
    push: jest.fn(),
  };

  const wrapper = mount(RouterComponentTesting, {
    props: {
      isAuthenticated: false,
    },
    global: {
      mocks: {
        $route: mockRoute,
        $router: mockRouter,
      },
    },
  });

  await wrapper.find("button").trigger("click");

  expect(mockRouter.push).toHaveBeenCalledTimes(1);
  expect(mockRouter.push).toHaveBeenCalledWith("/404");
});
