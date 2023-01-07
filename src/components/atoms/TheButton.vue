<template>
  <button class="btn" @click="$emit('input', $event)" type="submit">
    <TheIcon v-bind:icon="icon" />
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
  width: 100%;
  height: 30px;
  border-radius: $border-radius-base;
  background: $color-secondary-dark;
  color: $color-primary-light;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: $color-tertiary-dark;
  }

  &:active {
    background: $color-tertiary-light;
    color: $color-primary-dark;
  }
}
</style>
