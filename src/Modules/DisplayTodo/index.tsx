import React, {
  useCallback,
  useState,
  ReactElement,
  useEffect,
  useMemo,
} from "react";

import ToDoComponent from "./components";
import { useFetch } from "../../CustomHooks/useFetch";

import { ToDoData } from "../../data/types/types";

import { TODO_URL } from "../../utils/constant";
import { filterByStatus, sortByTitle } from "./utils";
import { InputChangeEvent, SelectChangeEvent } from "../../constant";

const TodoContainer = (): ReactElement => {
  const [todos, setTodos] = useState<ToDoData[]>([]);
  const { data, loading, error } = useFetch();
  const [searchInput, setSearchInput] = useState<string>("");
  const [statusControl, setStatusControl] = useState<string>("");
  const [sortControl, setSortControl] = useState<string>("");
  let displayTodos = todos;

  useEffect(() => {
    if (!!data) {
      setTodos(data);
    }
  }, [data]);

  const markStatus = useCallback(
    (id: number, completed: boolean): ToDoData[] =>
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
      }),
    [todos]
  );

  const markTodoCompleted = useCallback(
    (id: number, completed: boolean) => setTodos(markStatus(id, completed)),
    [markStatus]
  );

  const statusListHandler = useCallback(
    (e: SelectChangeEvent) => {
      setStatusControl(e.target.value);
    },
    [statusControl]
  );

  const searchHandler = useCallback(
    (e: InputChangeEvent) => {
      setSearchInput(e.target.value);
    },
    [searchInput]
  );

  const sortHandler = useCallback(
    (e: SelectChangeEvent) => {
      setSortControl(e.target.value);
    },
    [sortControl]
  );

  displayTodos = displayTodos.filter((todo) =>
    todo.title.includes(searchInput)
  );

  displayTodos = useMemo(
    () => filterByStatus(statusControl, displayTodos),
    [statusControl, displayTodos]
  );

  displayTodos = useMemo(
    () => sortByTitle(sortControl, displayTodos),
    [sortControl, displayTodos]
  );

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
