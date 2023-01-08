<template>
  <div id="the_list" v-if="items.length > 0">
    <div id="list">
      <div v-for="item in items" v-bind:key="item.id" id="item_row">
        <div id="item" v-if="!item.isFinished && !item.isDeleted">
          <TheItem
            v-bind:item="item.name"
            v-bind:checked="item.isFinished"
            v-bind:deleted="item.isDeleted"
          >
            <template v-slot:actions>
              <TheIconButton @input="checkItem(item.id)" icon="done" />
              <TheIconButton
                @input="deleteItem(item.id)"
                icon="delete_outline"
              />
            </template>
          </TheItem>
        </div>
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
    checkItem(id) {
      this.items.forEach((item) => {
        if (item.id === id) {
          item.isFinished = !item.isFinished;
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
#the_list {
  width: 90%;
  margin-top: 10px;
  border-radius: 20px;
  background-color: $color-primary-light;
  padding: $spacing-xsmall;

  #list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;

    #item_row {
      width: 97%;
      margin: 0 0 $spacing-xsmall 0;
    }
  }
}
</style>
