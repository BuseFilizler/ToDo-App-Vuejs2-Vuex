<template>
  <div class="px-4 m-10 bg-ortayesil rounded-lg shadow-2xl">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-6 py-4 px-2 w-full"
    >
      <h1 class="border-b-2 text-kirmizi text-lg font-bold">Todos :</h1>
      <div
        class="items-center flex justify-between bg-yesil text-zinc-100 h-16 p-2 cursor-pointer shadow-2xl rounded-lg text-xl"
        :class="{ 'is-complate': todo.completed }"
        v-for="todo in allTodos"
        :key="todo.key"
        @dblclick="isCompleted(todo)"
      >
        {{ todo.title }}
        <i
          class="fa-sharp fa-solid fa-trash cursor-pointer fa-lg w-10 hover:opacity-40"
          @click="deleteTodo(todo.id)"
        ></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TheTodos",
  computed: {
    ...mapGetters("todos", ["allTodos"]),
  },
  methods: {
    ...mapActions("todos", ["fetchTodos", "deleteTodo", "updateTodo"]),
    isCompleted(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updatedTodo);
    },
  },
  created() {
    this.fetchTodos();
  },
};
</script>
<style scoped>
.is-complate {
  border-width: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f76b8a;
  text-decoration: line-through;
  color: aliceblue;
  height: 4rem;
  padding: 0.5rem;
}
</style>
