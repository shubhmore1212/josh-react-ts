import React from "react";

export const TASK_STATE = {
  PENDING: "Pending",
  COMPLETED: "Completed",
};

export const SORT_OPTIONS = {
  SELECT_ONE: "Select One",
  ASC_KEY: "asc",
  DESC_KEY: "desc",
  ASC_VALUE: "A-Z",
  DESC_VALUE: "Z-A",
};

export const STATUS_OPTIONS = {
  ALL: "All",
  COMPLETED: TASK_STATE.COMPLETED,
  PENDING: TASK_STATE.PENDING,
};
export const SORT_KEY_OPTIONS = {
  ID: "id",
  TITLE: "title",
  BODY: "body",
  DATE: "date",
};

export const RQ_KEY_TODOS = "todos";
export const RQ_KEY_TODO = "todo";

export const INPUT = "input";
export const TEXTAREA = "textarea";
export const DATE = "date";

export const ACTIONS = {
  SET_SEARCH_INPUT: "SET_SEARCH_INPUT",
  SET_STATUS_CONTROL: "SET_STATUS_CONTROL",
  SET_SORT_CONTROL: "SET_SORT_CONTROL",
  SET_SORT_KEY: "SET_SORT_KEY",
  SET_PAGE_NUMBER: "SET_PAGE_NUMBER",
  SET_SEARCH_TRIGGER: "SET_SEARCH_TRIGGER",
};

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
export type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>;
export type KeyboardInputElement = React.KeyboardEvent<HTMLInputElement>;
