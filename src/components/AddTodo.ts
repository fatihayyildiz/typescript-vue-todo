import { defineComponent } from "vue";
import Todo from "@/models/Todo";
import IconBase from "@/components/IconBase.vue";
import IconDown from "@/assets/icons/IconDown.vue";

export default defineComponent({
  name: "AddTask",
  data() {
    return {
      taskText: "",
      todos: [] as Todo[],
    };
  },
  components: {
    IconBase,
    IconDown,
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
