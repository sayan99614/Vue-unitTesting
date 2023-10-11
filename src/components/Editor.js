export const Editor = {
  props: {
    label: String,
    modelValue: String,
  },
  emits: ["update:modelVale"],
  template: `<label>{{label}}</label>
  <input :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" />
  `,
};
