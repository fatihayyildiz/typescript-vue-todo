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
        createDateTime: new Date(),
        lastChangedDateTime: new Date(),
        completed: false,
        isActive: true,
      },
      {
        text: "Another todo",
        createDateTime: new Date(),
        lastChangedDateTime: new Date(),
        completed: true,
        isActive: true,
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
