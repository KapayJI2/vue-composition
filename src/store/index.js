import { createStore } from "vuex";

const store = createStore({
  state: {
    users: [],
  },
  getters: {
    getAllUsers(state) {
      return state.users;
    },
    getUserData: (state) => (id) => {
      return state.users.find((user) => user.id === id);
    },
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
  },
  actions: {
    setUsers({ commit }, data) {
      commit("setUsers", data);
    },
  },
});
export default store;
