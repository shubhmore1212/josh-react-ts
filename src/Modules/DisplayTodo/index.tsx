import React, { useCallback, useState, ReactElement, useEffect } from "react";

import ToDoComponent from "./components";
import { useFetch } from "../../CustomHooks/useFetch";

import StatusController from "./components/StatusController";
import SortController from "./components/SortController";

import { ToDoData } from "../../data/types/types";
import { TODO_URL } from "../../utils/constant";
import { InputChangeEvent, SelectChangeEvent } from "../../constant";

const TodoContainer = (): ReactElement => {
  const [todos, setTodos] = useState<ToDoData[]>([]);
  const { data, loading, error } = useFetch();
  const [searchInput, setSearchInput] = useState<string>("");
  const [statusControl, setStatusControl] = useState<string>("");
  const [sortControl, setSortControl] = useState<string>("");
  let displayTodos = todos;

  useEffect(() => {
    if (!!data) setTodos(data);
  }, [data]);

  const markTodoCompleted = useCallback(
    (id: number, completed: boolean) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            let tempObj = { ...todo, completed: completed };
            fetch(`${TODO_URL}/${id}`, {
              method: "PATCH",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(tempObj),
            })
              .then((res) => res.json())
              .catch((err) => err);
            return tempObj;
          } else {
            return todo;
          }
        })
      );
    },
    [todos]
  );

  const statusListHandler = useCallback(
    (e: SelectChangeEvent) => {
      setStatusControl(e.target.value);
    },
    [statusControl]
  );

  displayTodos = StatusController({
    control: statusControl,
    data: displayTodos,
  });

  const searchHandler = useCallback(
    (e: InputChangeEvent) => {
      setSearchInput(e.target.value);
    },
    [searchInput]
  );

  displayTodos = displayTodos.filter((todo) =>
    todo.title.includes(searchInput)
  );

  const sortHandler = useCallback(
    (e: SelectChangeEvent) => {
      setSortControl(e.target.value);
    },
    [statusControl]
  );

  displayTodos = SortController({
    control: sortControl,
    data: displayTodos,
  });

  return (
    <ToDoComponent
      todos={displayTodos}
      markTodoCompleted={markTodoCompleted}
      loading={loading}
      error={error}
      searchHandler={searchHandler}
      statusListHandler={statusListHandler}
      sortHandler={sortHandler}
    />
  );
};

export default React.memo(TodoContainer);
