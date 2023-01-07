<template>
  <div id="home">
    <TheForm />
    <div class="header">
      <TheTypography content="Taskly" tag="h1" />
      <TheTypography v-bind:content="getDay" tag="span" />
    </div>
    <TheList />
    <TheListFinished v-on:finish="finishedItems = $event" />
    <TheListDeleted v-on:delete="deletedItems = $event" />
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "HomeView",
  data() {
    return {
      finishedItems: [],
      deletedItems: [],
    };
  },
  computed: {
    getDay() {
      return moment().format("MMM Do YY");
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  margin: 0 auto;
  width: 90vw;
  height: 90vh;
}
</style>
