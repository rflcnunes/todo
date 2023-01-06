<template>
  <component :is="tag">
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

<style scoped>
/**/
</style>
