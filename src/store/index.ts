import { createStore } from "vuex";
import Todo from "@/models/Todo";

import { Store } from "vuex";

export enum VIEW_TYPES {
  All = "All",
  Active = "Active",
  Completed = "Completed",
}

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    todos: Todo[];
    activeView: VIEW_TYPES;
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
    activeView: VIEW_TYPES.All,
  },
  mutations: {
    setTodo: (state, todo) => {
      state.todos.unshift(todo);
    },
    deleteTodo(state, todo) {
      const todoIndex = state.todos.findIndex((td) => td.text === todo.text);
      state.todos.splice(todoIndex, 1);
    },
    setActiveView: (state, activeView) => (state.activeView = activeView),
  },
  actions: {},
  modules: {},
});
