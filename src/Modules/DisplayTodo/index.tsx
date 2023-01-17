import React, { useCallback, useState, ReactElement } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AxiosError } from "axios";

import ToDoComponent from "./components";
import Loader from "../../Shared/components/Loader";

import { ToDoData } from "../../data/types/types";
import { getTodos, updateTodo } from "../../services/todos.services";

import { InputChangeEvent } from "../../constant";
import { statusFunction } from "./utils";

const TodoContainer = (): ReactElement => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [statusControl, setStatusControl] = useState<string>("");
  const [sortControl, setSortControl] = useState<string>("");
  const [sortKey, setSortKey] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchTrigger, setSearchTrigger] = useState<string>("");
  const pageSize = 5;
  const queryClient = useQueryClient();
  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = useQuery<ToDoData[], AxiosError>(
    ["todos", pageNumber, statusControl, sortKey, sortControl, searchTrigger],
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

  const { mutate } = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const markTodo = useCallback(
    (id: number, completed: boolean) => {
      todos?.map((todo) => {
        if (todo.id === id) {
          let tempObj = { ...todo, completed: completed };
          mutate({ id, body: tempObj });
          return tempObj;
        } else {
          return todo;
        }
      });
    },
    [todos]
  );

  const statusListHandler = useCallback(
    (statusValue: string) => {
      setStatusControl(statusValue);
    },
    [statusControl]
  );

  const searchHandler = useCallback(
    (e: InputChangeEvent) => {
      setSearchInput(e.target.value);
    },
    [searchInput]
  );

  const searchButtonHandler = useCallback(
    (data: string) => {
      setSearchTrigger(data);
    },
    [searchTrigger]
  );

  const sortHandler = useCallback(
    (sortValue: string) => {
      setSortControl(sortValue);
    },
    [sortControl]
  );

  const sortKeyHandler = useCallback(
    (sortValue: string) => {
      setSortKey(sortValue);
    },
    [sortKey]
  );

  const pageNumberHandler = useCallback(
    (pageNumber: number) => {
      setPageNumber(pageNumber);
    },
    [pageNumber]
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div className="error-msg">{error.message}</div>;
  }

  return (
    <ToDoComponent
      todos={todos}
      markTodoCompleted={markTodo}
      searchInput={searchInput}
      searchHandler={searchHandler}
      searchButtonHandler={searchButtonHandler}
      statusControl={statusControl}
      statusListHandler={statusListHandler}
      sortHandler={sortHandler}
      pageNumber={pageNumber}
      pageNumberHandler={pageNumberHandler}
      sortControl={sortControl}
      sortKey={sortKey}
      sortKeyHandler={sortKeyHandler}
    />
  );
};

export default React.memo(TodoContainer);
