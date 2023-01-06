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

<style lang="scss" scoped>
#input-component {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  align-items: flex-start;

  #label {
    margin-bottom: 0.5rem;
    font-family: $font-family-heading;
  }

  #input {
    border: 1px solid $color-primary-dark;
    background: $color-primary-light;
    padding: 0.5rem;
  }
}
</style>
