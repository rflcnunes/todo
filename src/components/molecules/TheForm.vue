<template>
  <div>
    <TheTypography content="Taskly" tag="h1" />
    <TheInput
      :label="label"
      :placeholder="placeholder"
      @input="task = $event"
    />
    {{ task }}
    <TheButton label="Save" @data="saveTask" />
  </div>
</template>

<script>
import TheInput from "@/components/atoms/TheInput.vue";
import TheTypography from "@/components/atoms/TheTypography.vue";
import TheButton from "@/components/atoms/TheButton.vue";

export default {
  name: "TheForm",
  components: {
    TheButton,
    TheTypography,
    TheInput,
  },
  data() {
    return {
      label: "Insert your task",
      placeholder: "To buy coffee",
      task: "",
      saved: null,
      tasks: [],
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    getTasks() {
      localStorage.getItem("tasks") &&
        (this.tasks = JSON.parse(localStorage.getItem("tasks")));
    },
    saveTask() {
      this.tasks.push({ id: this.tasks.length, name: this.task });
      console.log("saveTask", this.task);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
};
</script>

<style scoped>
/**/
</style>
