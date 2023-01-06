<template>
  <div>
    <TheTypography content="The List" tag="h1" />
    <div id="list">
      <div v-for="item in items" v-bind:key="item.id">
        <TheItem v-bind:item="item.name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheList",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    getItems() {
      localStorage.getItem("tasks") &&
        (this.items = JSON.parse(localStorage.getItem("tasks")));
    },
  },
};
</script>

<style lang="scss" scoped>
#list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid $color-primary-dark;
}
</style>
