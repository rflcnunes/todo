<template>
  <div>
    <TheTypography content="Test" tag="h2" />
    <TheInput
      :label="label"
      :placeholder="placeholder"
      @input="task = $event"
    />
    {{ task }}
    <TheButton label="Save" @data="saveTask" />
    <div>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          {{ task.name }}
        </li>
      </ul>
    </div>
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
      label: "Test",
      placeholder: "Test Tester",
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
