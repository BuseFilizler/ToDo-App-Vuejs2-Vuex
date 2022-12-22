<template>
  <div class="home flex flex-col justify-center items-start">
    <div class="w-full">
      <AddTodo />
    </div>
    <div class="w-full">
      <TheTodos />
    </div>
  </div>
</template>
<script>
import AddTodo from "../components/AddTodo.vue";
import TheTodos from "../components/TheTodos.vue";
export default {
  components: {
    AddTodo,
    TheTodos,
  },
};
</script>
