import React, { useCallback, ReactElement, useReducer } from "react";
import { useQueryClient } from "react-query";

import ToDoComponent from "./components";
import Loader from "../../Shared/components/Loader";

import { ToDoData } from "../../data/types/types";
import { useGetTodos, useUpdateTodo } from "../../CustomHooks/QueryHooks";

import { ACTIONS, InputChangeEvent, RQ_KEY_TODOS } from "../../constant";
import { displayTodoReducer, initialState } from "./reducers";

const pageSize = 5;

const TodoContainer = (): ReactElement => {
  const [state, dispatch] = useReducer(displayTodoReducer, initialState);
  const queryClient = useQueryClient();
  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = useGetTodos({
    pageNumber: state.pageNumber,
    pageSize,
    sortKey: state.sortKey,
    sortControl: state.sortControl,
    statusControl: state.statusControl,
    searchTrigger: state.searchTrigger,
  });

  const onUpdateSuccess = () => {
    queryClient.invalidateQueries(RQ_KEY_TODOS);
  };

  const { mutate } = useUpdateTodo({ onSuccess: onUpdateSuccess });

  const markTodo = useCallback(
    (id: number, completed: boolean) => {
      todos?.map((todo: ToDoData) => {
        if (todo.id === id) {
          let tempObj = { ...todo, completed };
          mutate({ id, body: tempObj });
          return tempObj;
        } else {
          return todo;
        }
      });
    },
    [todos]
  );

  const statusListHandler = useCallback((statusValue: string) => {
    dispatch({ type: ACTIONS.SET_STATUS_CONTROL, payload: statusValue });
  }, []);

  const searchHandler = useCallback((e: InputChangeEvent) => {
    dispatch({ type: ACTIONS.SET_SEARCH_INPUT, payload: e.target.value });
  }, []);

  const searchButtonHandler = useCallback((trigger: string) => {
    dispatch({ type: ACTIONS.SET_SEARCH_TRIGGER, payload: trigger });
  }, []);

  const sortHandler = useCallback((sortValue: string) => {
    dispatch({ type: ACTIONS.SET_SORT_CONTROL, payload: sortValue });
  }, []);

  const sortKeyHandler = useCallback((sortValue: string) => {
    dispatch({ type: ACTIONS.SET_SORT_KEY, payload: sortValue });
  }, []);

  const pageNumberHandler = useCallback((pageNumber: number) => {
    dispatch({ type: ACTIONS.SET_PAGE_NUMBER, payload: pageNumber });
  }, []);

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
      searchInput={state.searchInput}
      searchHandler={searchHandler}
      searchButtonHandler={searchButtonHandler}
      statusControl={state.statusControl}
      statusListHandler={statusListHandler}
      sortHandler={sortHandler}
      pageNumber={state.pageNumber}
      pageNumberHandler={pageNumberHandler}
      sortControl={state.sortControl}
      sortKey={state.sortKey}
      sortKeyHandler={sortKeyHandler}
    />
  );
};

export default React.memo(TodoContainer);
