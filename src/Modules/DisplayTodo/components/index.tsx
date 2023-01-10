import React, { ReactElement } from "react";

import AddTodoButton from "./AddTodoButton";
import TodoList from "./TodoList";
import Loader from "../../../Shared/components/Loader";

import SearchBox from "../../../Shared/components/SearchBox";
import SelectBox from "../../../Shared/components/SelectBox";

import { ToDoData } from "../../../data/types/types";

import {
  InputChangeEvent,
  SelectChangeEvent,
  TASK_STATE,
} from "../../../constant";

interface IProps {
  todos: ToDoData[];
  markTodoCompleted: (id: number, showCompleted: boolean) => void;
  loading: boolean;
  error: string;
  searchHandler: (e: InputChangeEvent) => void;
  statusListHandler: (e: SelectChangeEvent) => void;
  sortHandler: (e: SelectChangeEvent) => void;
}

const { COMPLETED, PENDING } = TASK_STATE;
const statusOptions = ["All", COMPLETED, PENDING];
const sortOptions = ["Select One", "A-Z", "Z-A"];

const ToDoComponent: React.FC<IProps> = (props): ReactElement => {
  const {
    todos,
    markTodoCompleted,
    loading,
    error,
    searchHandler,
    statusListHandler,
    sortHandler,
  } = props;

  if (loading) return <Loader />;

  return (
    <div>
      <div className="display-logo-search">
        <div className="logo">
          <h1>To Do</h1>
        </div>
        <div className="search-add">
          <SearchBox searchHandler={searchHandler} />
        </div>
      </div>
      <div className="display-todo-feature">
        <div className="status-feature">
          <label>Status</label>
          <SelectBox
            selectHandler={statusListHandler}
            options={statusOptions}
          />
        </div>
        <div className="sort-feature">
          <label>Sort Order</label>
          <SelectBox selectHandler={sortHandler} options={sortOptions} />
        </div>
      </div>
      <AddTodoButton />
      {!error ? (
        <TodoList todos={todos} markTodoCompleted={markTodoCompleted} />
      ) : (
        <div className="error-msg">{error}</div>
      )}
    </div>
  );
};

export default React.memo(ToDoComponent);
