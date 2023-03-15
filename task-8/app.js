const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      isActive: true,
    };
  },
  computed: {
    buttonCaption() {
        return this.isActive ? 'Hide' : 'Show' 
    }
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
