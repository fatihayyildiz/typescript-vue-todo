import { defineComponent } from "vue";
import Todo from "@/models/Todo";
import IconBase from "@/components/IconBase.vue";
import IconDown from "@/assets/icons/IconDown.vue";
import IconClose from "@/assets/icons/IconClose.vue";
import { VIEW_TYPES } from "@/store";

export default defineComponent({
  name: "AddTask",
  data() {
    return {
      taskText: "",
      todos: [] as Todo[],
      activeView: "",
    };
  },
  components: {
    IconBase,
    IconDown,
    IconClose,
  },
  methods: {
    addTodo(): void {
      if (this.taskText !== "") {
        const newTodo = new Todo(this.taskText);
        this.$store.commit("setTodo", newTodo);
        this.taskText = "";
      }
    },
    setTodoComplete(task: Todo): void {
      this.$store.commit("completeTask", task);
    },
    deleteTodo(task: Todo) {
      this.$store.commit("deleteTodo", task);
    },
    clearCompletedTodos(): void {
      this.$store.state.todos
        .filter((td) => td.completed)
        .map((willRemove) => this.$store.commit("deleteTodo", willRemove));
    },
    setActiveView(activeView: VIEW_TYPES): void {
      this.$store.commit("setActiveView", activeView);
    },
  },
  computed: {
    filteredTodos(): Todo[] {
      return this.$store.state.todos.filter((td) => {
        if (this.activeView === "Active") return !td.completed && td.visible;
        else if (this.activeView === "Completed")
          return td.completed && td.visible;
        else return td.visible;
      });
    },
  },
  mounted() {
    this.todos = this.$store.state.todos;
    this.activeView = this.$store.state.activeView;
  },
});
