<template>
  <div class="home">
    <TheForm />
    <TheList />
  </div>
</template>

<script>
// @ is an alias to /src
import TheList from "@/components/organisms/TheList.vue";
import TheForm from "@/components/molecules/TheForm.vue";

export default {
  name: "HomeView",
  components: {
    TheForm,
    TheList,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  border: 1px solid red;
}
</style>
