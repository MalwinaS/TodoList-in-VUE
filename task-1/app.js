const app = Vue.createApp({
  data() {
    return {
        firstName: 'Malwa',
        age: 29,
        imgUrl: 'https://cdn.pixabay.com/photo/2023/02/12/23/32/lizard-7786211_960_720.jpg'
    };
  },
  methods: {
    newAge() {
        return this.age + 5
    },
    randomNum() {
        return Math.random()
    }
  }
});

app.mount('#assignment')
