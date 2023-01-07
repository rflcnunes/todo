<template>
  <button class="btn" @click="$emit('input', $event)" type="submit">
    <TheIcon v-bind:icon="icon" />
  </button>
</template>

<script>
export default {
  name: "TheIconButton",
  data() {
    return {
      value: "",
    };
  },
  props: {
    icon: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 50%;
  height: 30px;
  border-radius: $border-radius-base;
  background: $color-secondary-dark;
  color: $color-primary-light;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 5px 0 5px;

  &:hover {
    background: $color-tertiary-dark;
  }

  &:active {
    background: $color-tertiary-light;
    color: $color-primary-dark;
  }
}
</style>
