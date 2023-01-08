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
    <div id="actions">
      <slot name="actions" />
    </div>
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
#the_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .checked {
    color: mediumseagreen;
  }

  .deleted {
    color: red;
  }

  #actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 25%;
    align-items: center;
  }
}
</style>
