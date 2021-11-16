import { defineComponent } from "vue";
import Todo from "../models/Todo";

export default defineComponent({
  name: "AddTask",
  data() {
    return {
      taskText: "",
      todos: [] as Todo[],
    };
  },
  methods: {
    addTodo(): void {
      if (this.taskText !== "") {
        const newTodo = new Todo(this.taskText);
        this.$store.commit("setTodo", newTodo);
        this.taskText = "";
      }
    },
    setTaskComplete(task: Todo): void {
      this.$store.commit("completeTask", task);
    },
    deleteTask(task: Todo) {
      this.$store.commit("deleteTask", task);
    },
  },
  mounted() {
    this.todos = this.$store.state.todos;
  },
});
