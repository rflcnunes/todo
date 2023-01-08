<template>
  <div id="home">
    <div id="header">
      <TheTypography v-bind:content="getDay" tag="span" class="light" />
      <TheTypography content="Taskly" tag="h1" />
    </div>
    <div id="body">
      <TheList />
      <TheListFinished v-on:finish="finishedItems = $event" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "HomeView",
  data() {
    return {
      finishedItems: [],
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
  text-align: center;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;

  #header {
    width: 100%;
    height: 20%;
    background-color: $color-tertiary-dark;
    color: $color-secondary-light;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  #body {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: $color-tertiary-light;
  }
}
</style>
