<template>
  <div id="the_list_finished" v-if="items.length > 0">
    <div id="list">
      <div v-for="item in finishedItems" v-bind:key="item.id" id="item">
        <TheItem
          v-bind:item="item.name"
          v-bind:checked="item.isFinished"
          v-bind:deleted="item.isDeleted"
        >
          <template v-slot:actions>
            <TheIconButton @input="unchecked(item.id)" icon="close" />
            <TheIconButton @input="deleteItem(item.id)" icon="delete_outline" />
          </template>
        </TheItem>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheListFinished",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  computed: {
    finishedItems() {
      return this.items.filter((item) => item.isFinished && !item.isDeleted);
    },
  },
  methods: {
    getItems() {
      localStorage.getItem("tasks");
      this.items = JSON.parse(localStorage.getItem("tasks"));

      this.$emit("finish", this.items);
    },
    unchecked(id) {
      this.items.forEach((item) => {
        if (item.id === id) {
          item.isFinished = false;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(this.items));
      this.getItems();
    },
    deleteItem(id) {
      this.items.forEach((item) => {
        if (item.id === id) {
          item.isDeleted = !item.isDeleted;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(this.items));
      this.getItems();
    },
  },
};
</script>

<style lang="scss" scoped>
#the_list_finished {
  width: 100%;
  margin-top: 10px;
  border: 1px solid black;
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
