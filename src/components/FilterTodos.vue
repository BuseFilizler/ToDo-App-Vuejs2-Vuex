<template>
  <div class="pt-10">
    <div class="items-center flex justify-start flex-row gap-10 px-4">
      <h1 class="text-sm font-bold text-center text-kirmizi">Filter Todos:</h1>
      <select
        @change="filterTodos($event)"
        class="w-30 px-1 py-1 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-900 dark:border-yesil focus:outline-none shadow-2xl focus:ring-0 focus:border-gray-200 hover:bg-opacity-25"
      >
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>

      <select
        @change="filterTodos2($event)"
        class="w-30 px-1 py-1 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-900 dark:border-yesil focus:outline-none shadow-2xl focus:ring-0 focus:border-gray-200"
      >
        <option value="">All</option>
        <option value="true">Complated</option>
        <option value="false">Not Completed</option>
      </select>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FilterTodos",
  computed: {
    ...mapGetters("todos", ["trueOrFalse"]),
  },
  methods: {
    ...mapActions("todos", ["filterTodos", "filterTodos2"]),
  },
};
</script>
<style></style>
