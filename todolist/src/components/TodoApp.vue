<template>
    <div>
      <input type="text" placeholder="todo" v-model="newItem">
      <button @click="addItem">Dodaj</button>
    
    </div>

    <TodoItem 
    v-for="item in items" 
    :key="item.id"
    :item="item" 
    @removeClicked="removeItem"
    />
    
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue'
  export default {
    components: {
        TodoItem
    },
    data() {
      return {
        newItem: "",
        items: [
          { id: 1, title: 'Zrobić zakupy', completed: false },
          { id: 2, title: 'Posprzątać mieszkanie', completed: false }
        ]
      }
    },
    methods: {
        addItem() {
          this.items.push({ id: Math.random, title: this.newItem, completed: false })
          this.newItem = ""
        },
        removeItem(id) {
          const index = this.items.findIndex(el => el.id === id)
          this.items[index].completed = true
        }
      }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .item {
    border: 1px solid black;
    padding: 10px;
    margin: 5px;
    width: 100%;
  }
  .completed {
    opacity: 0.5;
  }
  .completed h2 {
    text-decoration: line-through;
  }
  </style>
  