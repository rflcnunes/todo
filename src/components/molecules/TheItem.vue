<template>
  <div id="the_item">
    <TheTypography
      v-bind:content="item"
      tag="span"
      v-bind:class="{
        checked: checked,
        deleted: deleted,
      }"
    />
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
    checked: {
      type: Boolean,
      required: true,
    },
    deleted: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.checked {
  color: mediumseagreen;
}

.deleted {
  color: red;
}
</style>
