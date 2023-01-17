import React, { ReactElement } from "react";

import AddTodoButton from "./AddTodoButton";
import TodoList from "./TodoList";

import SearchBox from "../../../Shared/components/SearchBox";
import SelectBox from "../../../Shared/components/SelectBox";

import { ToDoData } from "../../../data/types/types";

import { InputChangeEvent, TASK_STATE } from "../../../constant";

interface IProps {
  todos?: ToDoData[];
  markTodoCompleted: (id: number, showCompleted: boolean) => void;
  searchInput: string;
  searchHandler: (e: InputChangeEvent) => void;
  searchButtonHandler: (search: string) => void;
  statusControl: string;
  statusListHandler: (e: string) => void;
  sortHandler: (e: string) => void;
  pageNumber: number;
  pageNumberHandler: (pageNumber: number) => void;
  sortControl: string;
  sortKey: string;
  sortKeyHandler: (e: string) => void;
}

const { COMPLETED, PENDING } = TASK_STATE;
const statusOptions = [
  { key: "All", value: "All" },
  { key: COMPLETED, value: COMPLETED },
  { key: PENDING, value: PENDING },
];
const sortOptions = [
  { key: undefined, value: "Select One" },
  { key: "asc", value: "A-Z" },
  { key: "desc", value: "Z-A" },
];
const sortKeyOptions = [
  { key: "id", value: "id" },
  { key: "title", value: "title" },
  { key: "body", value: "body" },
  { key: "date", value: "date" },
];

const ToDoComponent: React.FC<IProps> = (props): ReactElement => {
  const {
    todos,
    markTodoCompleted,
    searchInput,
    searchHandler,
    searchButtonHandler,
    statusControl,
    statusListHandler,
    sortHandler,
    pageNumber,
    pageNumberHandler,
    sortControl,
    sortKey,
    sortKeyHandler,
  } = props;

  return (
    <div>
      <div className="display-logo-search">
        <div className="logo">
          <h1>To Do</h1>
        </div>
        <div className="search-add">
          <SearchBox searchInput={searchInput} searchHandler={searchHandler} />
          <button
            className="add-button"
            onClick={() => searchButtonHandler(searchInput)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="display-todo-feature">
        <div className="status-feature">
          <label>Status</label>
          <SelectBox
            value={statusControl}
            selectHandler={statusListHandler}
            options={statusOptions}
          />
        </div>
        <div className="sort-feature">
          <label>Sort By</label>
          <SelectBox
            value={sortKey}
            selectHandler={sortKeyHandler}
            options={sortKeyOptions}
          />
          <label>Sort Order</label>
          <SelectBox
            value={sortControl}
            selectHandler={sortHandler}
            options={sortOptions}
          />
        </div>
      </div>
      <AddTodoButton />
      <TodoList
        todos={todos}
        pageNumber={pageNumber}
        pageNumberHandler={pageNumberHandler}
        markTodoCompleted={markTodoCompleted}
      />
    </div>
  );
};

export default React.memo(ToDoComponent);
