import {
  GetTodosResponse,
  GetTodosParams,
  PatchTodoBody,
  PatchTodoResponse,
  DeleteTodoResponse,
  ToDoData,
} from "../data/types/types";
import { DELETE, GET, PATCH, POST } from "./api";

export const getTodos = (
  params?: GetTodosParams
): Promise<GetTodosResponse> => {
  return GET("/todo", params);
};

export const fetchTodo = (id?: string): Promise<ToDoData> => {
  return GET(`/todo/${id}`);
};

export const addTodo = (data: {
  body: { title: string; body: string; date: string; completed: boolean };
}): Promise<GetTodosResponse> => {
  return POST("/todo", { ...data.body });
};

export const updateTodo = (data: {
  id?: number;
  body: PatchTodoBody;
}): Promise<PatchTodoResponse> => {
  return PATCH(`/todo/${data.id}`, data.body);
};

export const removeTodo = (id?: number): Promise<DeleteTodoResponse> => {
  return DELETE(`/todo/${id}`);
};
