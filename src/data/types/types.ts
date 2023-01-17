export interface ToDoData {
  id: number;
  title: string;
  body: string;
  date: string;
  completed: boolean;
}

export interface GetTodosParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: string;
  completed?: boolean | undefined;
  title_like?: string; // This is used for querying the todos by text,
}
export type GetTodosResponse = ToDoData[];
export type GetTodoResponse = ToDoData;

export interface PatchTodoBody {
  title?: string;
  date?: string;
  completed?: boolean;
}
export type PatchTodoResponse = ToDoData[];

export type DeleteTodoResponse = ToDoData[];
