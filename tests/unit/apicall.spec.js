import { mount, flushPromises } from "@vue/test-utils";
import axios from "axios";
import ApiCall from "@/components/ApiCall.vue";
import ApiCallWithLoader from "@/components/ApiCallWithLoader.vue";

const mockApiList = [
  {
    id: 1,
    title: "title1",
  },
  {
    id: 2,
    title: "title2",
  },
];

jest.spyOn(axios, "get").mockResolvedValue(mockApiList);

test("it should calls api when button click", async () => {
  const wrapper = mount(ApiCall);

  await wrapper.get("button").trigger("click");

  expect(axios.get).toBeCalledTimes(1);
  expect(axios.get).toBeCalledWith("/api/posts");

  await flushPromises();

  const posts = wrapper.findAll("[data-test='post']");

  expect(posts).toHaveLength(2);
  expect(posts[0].text()).toContain("title1");
  expect(posts[1].text()).toContain("title2");
});

test("it should show loading on api call and disable button", async () => {
  const wrapper = mount(ApiCallWithLoader);

  expect(wrapper.get("button").attributes()).not.toHaveProperty("disabled");
  expect(wrapper.find("[role='alert']").exists()).toBe(false);

  await wrapper.get("button").trigger("click");

  expect(wrapper.find("[role='alert']").exists()).toBe(true);
  expect(wrapper.get("button").attributes()).toHaveProperty("disabled");

  await flushPromises();

  expect(wrapper.get("button").attributes()).not.toHaveProperty("disabled");
  expect(wrapper.find("[role='alert']").exists()).toBe(false);
});
