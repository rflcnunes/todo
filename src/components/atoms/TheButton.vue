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
  border: 1px solid $color-primary-dark;
  background: $color-primary-light;
}
</style>
