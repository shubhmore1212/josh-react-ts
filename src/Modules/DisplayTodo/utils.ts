import { ToDoData } from "../../data/types/types";

import { TASK_STATE } from "../../constant";

const { COMPLETED, PENDING } = TASK_STATE;

export const filterByStatus = (
  control: string,
  data: ToDoData[]
): ToDoData[] => {
  switch (control) {
    case COMPLETED:
      return data.filter((d: ToDoData) => d.completed);
    case PENDING:
      return data.filter((d: ToDoData) => !d.completed);
    default:
      return data;
  }
};

export const sortByTitle = (control: string, data: ToDoData[]): ToDoData[] => {
  switch (control) {
    case "A-Z": {
      let todoD = data.sort((prev: ToDoData, next: ToDoData) =>
        prev.title > next.title ? 1 : -1
      );
      return todoD;
    }
    case "Z-A":
      return data.sort((prev: ToDoData, next: ToDoData) =>
        prev.title > next.title ? -1 : 1
      );
    default:
      return data;
  }
};
