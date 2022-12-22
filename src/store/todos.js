import axios from "axios";

const state = {
  todos: [],
  trueOrFalse: true,
};
const getters = {
  allTodos: (state) => state.todos,
};
const mutations = {
  SET_TODOS: (state, todos) => (state.todos = todos),
  REMOVE_TODO: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  UPDATE_TODO: (state, updatedTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);

    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
  ADD_TODO: (state, newTitle) => state.todos.push(newTitle),
};
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://63845dbc3fa7acb14ff281d4.mockapi.io/buse"
    );
    commit("SET_TODOS", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(
      `https://63845dbc3fa7acb14ff281d4.mockapi.io/buse/${id}`
    );
    commit("REMOVE_TODO", id);
  },
  async updateTodo({ commit }, updatedTodo) {
    const response = await axios.put(
      `https://63845dbc3fa7acb14ff281d4.mockapi.io/buse/${updatedTodo.id}`,
      updatedTodo
    );
    commit("UPDATE_TODO", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://63845dbc3fa7acb14ff281d4.mockapi.io/buse",
      { title: title, completed: false }
    );
    commit("ADD_TODO", response.data);
  },
  async filterTodos({ commit }, event) {
    const limit = parseInt(
      event.target.options[event.target.options.selectedIndex].innerText
    );
    console.log(limit);
    const response = await axios.get(
      `https://63845dbc3fa7acb14ff281d4.mockapi.io/buse?page=1&limit=${limit}`
    );
    commit("SET_TODOS", response.data);
  },

  async filterTodos2({ commit }, event) {
    const trueOrFalse =
      event.target.options[event.target.options.selectedIndex].value;
    const response = await axios.get(
      `https://63845dbc3fa7acb14ff281d4.mockapi.io/buse?completed=${trueOrFalse}`
    );
    commit("SET_TODOS", response.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
