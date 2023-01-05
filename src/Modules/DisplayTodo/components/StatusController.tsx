import { TASK_STATE } from "../../../constant";
import { ToDoData } from "../../../data/types/types";

interface IProps {
  control: string;
  data: ToDoData[];
}

const StatusController = (props: IProps): ToDoData[] => {
  const { control, data } = props;
  const { COMPLETED, PENDING } = TASK_STATE;

  switch (control) {
    case COMPLETED:
      return data.filter((d: ToDoData) => d.completed);
    case PENDING:
      return data.filter((d: ToDoData) => !d.completed);
    default:
      return data;
  }
};

export default StatusController;
