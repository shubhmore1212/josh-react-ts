import React, { ReactElement } from "react";

import AddTodoButton from "./AddTodoButton";
import TodoList from "./TodoList";

import SearchBox from "../../../Shared/components/SearchBox";
import SelectBox from "../../../Shared/components/SelectBox";

import { ToDoData } from "../../../data/types/types";

import {
  InputChangeEvent,
  STATUS_OPTIONS,
  SORT_OPTIONS,
  SORT_KEY_OPTIONS,
} from "../../../constant";

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

const { ALL, COMPLETED, PENDING } = STATUS_OPTIONS;
const { SELECT_ONE, ASC_KEY, ASC_VALUE, DESC_KEY, DESC_VALUE } = SORT_OPTIONS;
const { ID, TITLE, BODY, DATE } = SORT_KEY_OPTIONS;

const statusOptions = [
  { key: ALL, value: ALL },
  { key: COMPLETED, value: COMPLETED },
  { key: PENDING, value: PENDING },
];

const sortOptions = [
  { key: undefined, value: SELECT_ONE },
  { key: ASC_KEY, value: ASC_VALUE },
  { key: DESC_KEY, value: DESC_VALUE },
];

const sortKeyOptions = [
  { key: ID, value: ID },
  { key: TITLE, value: TITLE },
  { key: BODY, value: BODY },
  { key: DATE, value: DATE },
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
