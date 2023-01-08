<template>
  <component :is="tag" :class="{ light: light, dark: dark }">
    {{ content }}
  </component>
</template>

<script>
const _tagTypes = ["h1", "h2", "h3", "h4", "h5", "p", "span", "label"];
export default {
  name: "TheTypography",
  props: {
    tag: {
      type: String,
      required: false,
      default: "span",
      validator(value) {
        return _tagTypes.includes(value);
      },
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: $font-family-heading;
}

span {
  color: $color-primary-dark;
  font-family: $font-family-subtitle;
}

.light {
  color: $color-secondary-light;
}

.dark {
  color: $color-secondary-dark;
}
</style>
