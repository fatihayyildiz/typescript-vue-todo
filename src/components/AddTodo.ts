import { defineComponent } from "vue";
import Todo from "@/models/Todo";
import IconBase from "@/components/IconBase.vue";
import IconDown from "@/assets/icons/IconDown.vue";
import IconClose from "@/assets/icons/IconClose.vue";
import TodoDataService from "@/services/todoService";
import TodoListResponse from "@/models/TodoListResponse";

export default defineComponent({
  name: "AddTask",
  data() {
    return {
      taskText: "",
      todos: [] as Todo[],
      activeView: "All",
    };
  },
  components: {
    IconBase,
    IconDown,
    IconClose,
  },
  methods: {
    retrieveTodos() {
      TodoDataService.getAll()
        .then((responseList: TodoListResponse) => {
          this.todos = responseList.data.sort((a, b) => b.id - a.id) as Todo[];
          console.log("todo responses:", responseList);
        })
        .catch((e: Error) => {
          console.log("todo retrieve error : ", e);
        });
    },
    addTodo(): void {
      if (this.taskText !== "") {
        const newTodo = new Todo(this.taskText);
        TodoDataService.createTodo(newTodo)
          .then((response: any) => {
            const savedTodo = response.data as Todo;
            this.todos.unshift(savedTodo);
          })
          .catch((e: Error) => {
            console.log("TodoDataService.createTodo retrieve error : ", e);
          });
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
    setActiveView(activeView: string): void {
      this.activeView = activeView;
    },
  },
  computed: {
    filteredTodos(): Todo[] {
      return this.todos.filter((td) => {
        if (this.activeView === "Active") return !td.completed && td.isActive;
        else if (this.activeView === "Completed")
          return td.completed && td.isActive;
        else return td.isActive;
      }) as Todo[];
    },
  },
  mounted() {
    //this.todos = this.$store.state.todos;
    this.retrieveTodos();
  },
});
