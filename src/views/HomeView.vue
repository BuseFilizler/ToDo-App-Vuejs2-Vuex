<template>
  <div class="home">
    <AddTodo />
    <FilterTodos />
    <TheTodos />
  </div>
</template>
<script>
import AddTodo from "../components/AddTodo.vue";
import FilterTodos from "../components/FilterTodos.vue";
import TheTodos from "../components/TheTodos.vue";
export default {
  components: {
    AddTodo,
    FilterTodos,
    TheTodos,
  },
};
</script>
