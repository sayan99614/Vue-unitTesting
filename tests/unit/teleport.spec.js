import { mount } from "@vue/test-utils";
import Navbar from "@/components/NavBar.vue";
import SignUp from "@/components/SignUp.vue";

// test("it should emits the event defined in form", async () => {
//   const wrapper = mount(Navbar);
// });

beforeEach(() => {
  const el = document.createElement("div");
  el.id = "modal";
  document.body.appendChild(el);
});

afterEach(() => {
  // ! cleanup
  document.body.outerHTML = "";
});

// test("teleport", () => {
//   const wrapper = mount(Navbar);
// });

test("set input and submit the form", async () => {
  const wrapper = mount(Navbar);
  const signup = wrapper.getComponent(SignUp);

  await signup.find("input").setValue("dheeman pati");
  await signup.find("form").trigger("submit");

  expect(signup.emitted().signup[0]).toEqual(["dheeman pati"]);
});
