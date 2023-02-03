import { useMutation, useQuery } from "react-query";
import { AxiosError } from "axios";

import {
  addTodo,
  fetchTodo,
  getTodos,
  updateTodo,
} from "../services/todos.services";
import { ToDoData } from "../data/types/types";

import { statusFunction } from "../Modules/DisplayTodo/utils";

import { RQ_KEY_TODO, RQ_KEY_TODOS } from "../constant";

interface IProps {
  id?: string;
  onSuccess?: () => void;
  onError?: () => void;
}

interface GetToDoParams extends IProps {
  pageNumber: number;
  pageSize: number;
  sortKey: string;
  sortControl: string;
  statusControl: string;
  searchTrigger: string;
}

export const useGetTodos = (props: GetToDoParams) => {
  const {
    pageNumber,
    pageSize,
    sortKey,
    sortControl,
    statusControl,
    searchTrigger,
  } = props;

  return useQuery<ToDoData[], AxiosError>(
    [
      RQ_KEY_TODOS,
      pageNumber,
      sortKey,
      sortControl,
      statusControl,
      searchTrigger,
    ],
    () =>
      getTodos({
        _page: pageNumber,
        _limit: pageSize,
        _sort: sortKey,
        _order: sortControl,
        completed: statusFunction(statusControl),
        title_like: searchTrigger,
      })
  );
};

export const useGetTodoById = (props: IProps): any => {
  const { id } = props;
  return useQuery(RQ_KEY_TODO, () => fetchTodo(id));
};

export const useAddTodo = (props: IProps) => {
  const { onSuccess, onError } = props;
  return useMutation(addTodo, {
    onSuccess,
    onError,
  });
};

export const useUpdateTodo = (props: IProps) => {
  const { onSuccess } = props;
  return useMutation(updateTodo, {
    onSuccess,
  });
};
