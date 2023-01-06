<template>
  <div id="input-component">
    <label id="label" for="input">{{ label }}</label>
    <input id="input" :type="type" :placeholder="placeholder" v-model="value" />
  </div>
</template>

<script>
const _inputTypes = ["text", "email"];
export default {
  name: "TheInput",
  data() {
    return {
      value: "",
    };
  },
  props: {
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "text",
      validator(value) {
        return _inputTypes.includes(value);
      },
    },
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style scoped>
/**/
</style>
