<template>
  <div id="the_list">
    <div id="list">
      <div v-for="item in items" v-bind:key="item.id" id="item">
        <TheItem v-bind:item="item.name" v-bind:checked="item.isFinished" />
        <button v-on:click="checkItem(item.id)">Check</button>
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
  },
};
</script>

<style lang="scss" scoped>
#the_list {
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
