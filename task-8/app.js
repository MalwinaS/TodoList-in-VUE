const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      isActive: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = "";
    },
    toggleList() {
      this.isActive = !this.isActive;
    },
  },
});

app.mount("#assignment");
