const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "Gosia",
          phone: "11112222",
          email: "gosia@localhost.pl",
        },
        {
          id: "1",
          name: "Pablo",
          phone: "1441112222",
          email: "pablo@localhost.pl",
        },
      ],
    };
  },
});

app.component("data-friend", {
  template: `
  <li>
  <h2>{{ friend.name }}</h2>
  <button @click="showData">Show Details</button>
  <ul v-if="dataVisible">
    <li><strong>Phone:</strong> {{ friend.phone }}</li>
    <li><strong>Email:</strong> {{ friend.email }}</li>
  </ul>
</li>
  `,
  data() {
    return {
      dataVisible: false,
      friend: 
        {
          id: "1",
          name: "Gosia",
          phone: "11112222",
          email: "gosia@localhost.pl",
        },
    };
  },
  methods: {
    showData() {
      this.dataVisible = !this.dataVisible;
    },
  },
});

app.mount("#app");
