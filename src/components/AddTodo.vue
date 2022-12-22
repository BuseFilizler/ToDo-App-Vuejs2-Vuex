<template>
  <div class="p-6 mx-10 mt-10 bg-ortayesil rounded-lg shadow-2xl">
    <blockquote
      class="text-5xl font-semibold italic text-center text-kirmizi pb-10"
    >
      Hello
      <span
        class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pembe relative inline-block shadow-lg"
      >
        <span class="relative text-acikyesil shadow-2xl">Buse</span>
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
          class="inputTask w-full h-12 appearance-none rounded py-2 px-4 text-gray-700 leading-tight border-b-4 border-yesil shadow-2xl bg-yesil bg-opacity-25 border-solid placeholder:text-kirmizi placeholder:opacity-40 focus:bg-opacity-10"
          required
        />
        <input
          type="submit"
          name=""
          value="Submit"
          class="bg-yesil py-2 px-1 shadow-2xl font-extrabold rounded-md hover:text-kirmizi cursor-pointer w-40 text-zinc-100"
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
