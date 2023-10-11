import { ref } from "vue";

export default function useCounter() {
  const counter = ref(0);

  function increase() {
    counter.value++;
  }
  return { counter, increase };
}
