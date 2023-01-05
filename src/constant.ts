import React from "react";
export const TASK_STATE = {
  PENDING: "Pending",
  COMPLETED: "Completed",
};

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
export type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>;
