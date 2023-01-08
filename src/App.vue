<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  @include reset();
}

#app {
  width: 100vw;
  height: 100vh;
}
</style>
