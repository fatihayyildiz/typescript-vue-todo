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
        visible: true,
      },
      {
        text: "Another todo",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: true,
        visible: true,
      },
    ] as Todo[],
  },
  mutations: {
    setTodo: (state, todo) => {
      state.todos.unshift(todo);
    },
    deleteTodo(state, todo) {
      const todoIndex = state.todos.findIndex((td) => td.text === todo.text);
      state.todos.splice(todoIndex, 1);
    },
  },
  actions: {},
  modules: {},
});
