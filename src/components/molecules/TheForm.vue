<template>
  <div>
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
export default {
  name: "TheForm",
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
      this.tasks.push({
        id: this.tasks.length,
        name: this.task,
        isFinished: false,
        isDeleted: false,
      });
      console.log("saveTask", this.task);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
};
</script>

<style scoped>
/**/
</style>
