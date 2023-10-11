import useCounter from "@/composables/useCounter";

test("it increase count value", () => {
  const { counter, increase } = useCounter();
  expect(counter.value).toBe(0);
  increase();
  expect(counter.value).toBe(1);
});
