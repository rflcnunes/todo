<template>
  <span class="material-icons">{{ icon }}</span>
</template>

<script>
export default {
  name: "TheIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/**/
</style>
