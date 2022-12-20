<template>
  <div class="p-4">
    <div class="items-center flex justify-start flex-row gap-10">
      <h1 class="text-lg font-bold text-center text-kirmizi">Filter Todos</h1>
      <select @change="filterTodos($event)" class="w-20 px-1 py-1">
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>

      <select @change="filterTodos2($event)" class="w-20 px-1 py-1">
        <option value="true">true</option>
        <option value="false">false</option>
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
