const app = Vue.createApp({
  data() {
    return {
      name: "Jest ok",
      text: "",
      secondText: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.name);
    },
    enteredText(event) {
      this.text = event.target.value;
    },
    submitText(event) {
      this.secondText = event.target.value;
    },
  },
});

app.mount("#assignment");
