export const EditorMultiple = {
  emits: ["update:name", "update:age", "update:currency"],
  props: {
    name: String,
    age: String,
    currency: String,
  },
  template: `<input
  type="text"
  :value="name"
  @input="$emit('update:name', $event.target.value)"
/>
<input
  type="text"
  :value="age"
  @input="$emit('update:age', $event.target.value)"
/>
<input
  type="text"
  :value="currency"
  @input="$emit('update:currency', $event.target.value)"
/>
    `,
};
