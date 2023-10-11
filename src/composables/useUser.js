import { onMounted, ref } from "vue";
import axios from "axios";

export default function useUser(userId) {
  const user = ref();

  function fetchUser() {
    axios.get(`/user/${userId}`).then((resp) => {
      user.value = resp.data;
    });
  }

  onMounted(() => fetchUser());

  return { user };
}
