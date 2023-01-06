<template>
  <div id="the_item">
    <TheTypography v-bind:content="item" tag="span" />
  </div>
</template>

<script>
export default {
  name: "TheItem",
  props: {
    item: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
//
</style>
