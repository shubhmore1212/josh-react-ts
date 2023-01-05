import { ToDoData } from "../../../data/types/types";

interface IProps {
  control: string;
  data: ToDoData[];
}

const SortController = (props: IProps): ToDoData[] => {
  const { control, data } = props;

  switch (control) {
    case "A-Z":
      return data.sort((a: ToDoData, b: ToDoData) =>
        a.title > b.title ? 1 : -1
      );
    case "Z-A":
      return data.sort((a: ToDoData, b: ToDoData) =>
        a.title > b.title ? -1 : 1
      );
    default:
      return data;
  }
};

export default SortController;
