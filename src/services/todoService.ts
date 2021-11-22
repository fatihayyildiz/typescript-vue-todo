import apiClient from "@/utils/axiosInstance";
import Todo from "@/models/Todo";
import TodoResponse from "@/models/TodoResponse";
import TodoListResponse from "@/models/TodoListResponse";

class TodoDataService {
  getAll(): Promise<TodoListResponse> {
    return apiClient.get("/todo");
  }
  createTodo(data: Todo): Promise<TodoResponse> {
    return apiClient.post("/todo", data);
  }
}

export default new TodoDataService();
