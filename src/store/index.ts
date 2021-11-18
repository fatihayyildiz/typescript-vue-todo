import { createStore } from "vuex";
import Todo from "@/models/Todo";

import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    todos: Todo[];
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

export default createStore({
  state: {
    todos: [
      {
        text: "Mock todo",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: false,
      },
      {
        text: "Another todo",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: true,
      },
    ] as Todo[],
  },
  mutations: {
    setTodo: (state, todo) => state.todos.unshift(todo),
  },
  actions: {},
  modules: {},
});
