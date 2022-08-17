import { createStore } from "vuex";

export default createStore({
  state: {
    name: null,
  },
  mutations: {
    increment(state) {
      state.name = "John";
    },
  },
  getters: {},
  actions: {},
});
