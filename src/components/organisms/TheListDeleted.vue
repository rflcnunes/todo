<template>
  <div id="the_list_deleted" v-if="items.length > 0">
    <div id="list">
      <div v-for="item in items" v-bind:key="item.id" id="item">
        <TheItem
          v-bind:item="item.name"
          v-bind:checked="item.isFinished"
          v-bind:deleted="item.isDeleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheListDeleted",
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
      const tasks = localStorage.getItem("tasks");
      JSON.parse(tasks).forEach((item) => {
        if (item.isDeleted) {
          this.items.push(item);
        }
      });

      this.$emit("deleted", this.items);
    },
  },
};
</script>

<style lang="scss" scoped>
#the_list_deleted {
  width: 100%;
  margin-top: 10px;
  border-radius: 20px;

  #list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;

    #item {
      border-bottom: 1px solid $color-primary-dark;
      width: 97%;
      height: 50px;
      display: flex;
      align-items: center;
      flex-direction: row;
      padding: 0 5px 0 5px;
      justify-content: space-between;
    }

    #item:last-child {
      border-bottom: none;
    }
  }
}
</style>
