import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://todo-postgres-api.herokuapp.com",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
