<template>
  <button class="btn" @click="$emit('data', $event)" type="submit">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "TheButton",
  data() {
    return {
      value: "",
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    input() {
      this.$emit("input");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  @include reset();
  width: 200px;
  height: 30px;
  border-radius: $border-radius-large;
  background: $color-secondary-dark;
  color: $color-primary-light;

  &:hover {
    background: $color-tertiary-dark;
  }

  &:active {
    background: $color-tertiary-light;
    color: $color-primary-dark;
  }
}
</style>
