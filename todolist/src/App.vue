<template>
  <div>
    <h1>Lista to do</h1>
    <TodoApp />
  </div>
</template>

<script>
  import todo from './components/TodoApp.vue'
  export default {
    components: {
      TodoApp : todo
    }
  }
</script>
