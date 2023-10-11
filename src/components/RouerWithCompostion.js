import { useRouter, useRoute } from "vue-router";

export const Component = {
  template: `
    <button @click="redirect">Click to edit</button>
    `,
  props: ["isAuthenticated"],
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const redirect = () => {
      if (props.isAuthenticated) {
        router.push(`/posts/${route.params.id}/edit`);
      } else {
        router.push(`/404`);
      }
    };
    return {
      redirect,
    };
  },
};
