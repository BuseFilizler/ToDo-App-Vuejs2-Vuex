<template>
  <div class="p-4 mx-10 mt-10 bg-ortayesil rounded-lg shadow-2xl">
    <blockquote
      class="text-5xl font-semibold italic text-center text-kirmizi pb-10"
    >
      Hello
      <span
        class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pembe relative inline-block"
      >
        <span class="relative text-acikyesil">Buse</span>
      </span>
      <div class="pt-2">Don't forget,</div>
      <div class="pt-2">Live the moment!</div>
    </blockquote>
    <div class="addTodo">
      <form @submit.prevent="onSubmit" class="flex gap-2">
        <input
          type="text"
          v-model="title"
          placeholder="Add new task..."
          class="inputTask w-full appearance-none rounded py-2 px-4 text-gray-700 leading-tight border-b-2 border-kirmizi shadow-2xl border-solid"
          required
        />
        <div>{{ title }}</div>
        <input
          type="submit"
          name=""
          value="Submit"
          class="bg-yesil py-2 px-1 rounded-md hover:text-kirmizi cursor-pointer w-40 text-zinc-100"
        />
      </form>
    </div>
    <FilterTodos />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import FilterTodos from "./FilterTodos.vue";

export default {
  components: {
    FilterTodos,
  },
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions("todos", ["addTodo"]),
    onSubmit(event) {
      event.preventDefault();
      this.addTodo(this.title);

      this.title = "";
    },
  },
};
</script>
<style scoped>
.inputTask:focus {
  outline: none;
}
</style>
