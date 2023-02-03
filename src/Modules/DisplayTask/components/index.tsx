import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import SelectBox from "../../../Shared/components/SelectBox";

import { ToDoData } from "../../../data/types/types";

import { ROUTES } from "../../../appContants";
import { TASK_STATE } from "../../../constant";

interface IProps {
  data: ToDoData;
  markTodoCompleted: (status: string) => void;
  modalHandler: () => void;
}

const { COMPLETED, PENDING } = TASK_STATE;
const statusOptions = [
  { value: COMPLETED, key: COMPLETED },
  { value: PENDING, key: PENDING },
];

const DisplayTaskComponent: React.FC<IProps> = (props): ReactElement => {
  const { data, markTodoCompleted, modalHandler } = props;

  return (
    <div className="display-table">
      <h1>To Do</h1>
      <div className="cross-button">
        <NavLink
          className="cross-button-link"
          title="Go to ToDo Page"
          to={ROUTES.HOME}
        >
          X
        </NavLink>
      </div>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <td>:</td>
            <td>{data.id}</td>
          </tr>
          <tr>
            <th>Task</th>
            <td>:</td>
            <td>{data.title}</td>
          </tr>
          <tr>
            <th>Body</th>
            <td>:</td>
            <td>{data.body}</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>:</td>
            <td>{data.date}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>:</td>
            <td>
              <SelectBox
                options={statusOptions}
                value={data.completed ? COMPLETED : PENDING}
                selectHandler={markTodoCompleted}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button className="delete-btn" onClick={modalHandler}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(DisplayTaskComponent);
