const app = Vue.createApp({
  data() {
    return {
        firstName: 'Malwa',
        age: 29,
        src: 'https://cdn.pixabay.com/photo/2023/02/12/23/32/lizard-7786211_960_720.jpg'
    };
  },
  methods: {
    newAge() {
        const ageFut = parseInt(this.age)
        return (ageFut + 5)
    },
    randomNum() {
        const randomNumber = Math.random()
        return randomNumber
    }
  }
});

app.mount('#assignment')
