const app = Vue.createApp({
  data() {
    return {
      result: 0,
      resultName: "",
    };
  },
  methods: {
    addNum(num) {
      this.result = this.result + num;
    },
  },
  computed: {
    resultText() {
      if (this.result < 37) {
        return (resultName = "Not there yet");
      } else if (this.result === 37) {
        return (resultName = 37);
      } else if (this.result > 37) {
        return (resultName = "Too much!");
      }
    },
  },
  watch: {
    resultText() {
      const that = this;
      setTimeout(function () {
        that.result = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
