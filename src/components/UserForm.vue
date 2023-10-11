<template>
  <form @submit.prevent="submit">
    <input type="email" v-model="form.email" />

    <textarea v-model="form.description" />

    <select v-model="form.city">
      <option value="new-york">New York</option>
      <option value="moscow">Moscow</option>
    </select>

    <input type="checkbox" v-model="form.subscribe" />

    <input type="radio" value="weekly" v-model="form.interval" />
    <input type="radio" value="monthly" v-model="form.interval" />
    <CustomInput label="name" v-model="form.name" />

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import CustomInput from "./CustomInput.vue";

export default {
  data() {
    return {
      form: {
        email: "",
        description: "",
        city: "",
        subscribe: false,
        interval: "",
        name: "demean patin",
      },
    };
  },
  methods: {
    async submit() {
      this.$emit("submit", this.form);
    },
  },
  components: { CustomInput },
};
</script>
