<template>
  <div class="p-4">
    <blockquote
      class="text-6xl font-semibold italic text-center text-kirmizi pb-10"
    >
      <span
        class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-bg relative inline-block"
      >
        <span class="relative text-kirmizi">ToDo</span>
      </span>
      App
    </blockquote>
    <div class="addTodo">
      <form @submit.prevent="onSubmit" class="flex gap-2">
        <input
          type="text"
          v-model="title"
          placeholder="Add new task..."
          class="inputTask w-full appearance-none rounded py-2 px-4 text-gray-700 leading-tight border-b-2 border-kirmizi border-solid"
          required
        />
        <input
          type="submit"
          name=""
          value="Submit"
          class="bg-yesil py-2 px-1 rounded-md hover:text-kirmizi cursor-pointer w-40 text-zinc-100"
        />
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
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
