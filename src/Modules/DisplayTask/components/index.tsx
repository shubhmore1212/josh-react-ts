import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { ToDoData } from "../../../data/types/types";

import { ROUTES } from "../../../appContants";
import { SelectChangeEvent, TASK_STATE } from "../../../constant";

interface IProps {
  data: ToDoData | undefined;
  markTodoCompleted: (e: SelectChangeEvent) => void;
  modalHandler: () => void;
}

const { COMPLETED, PENDING } = TASK_STATE;

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
            <td>{data?.id}</td>
          </tr>
          <tr>
            <th>Task</th>
            <td>:</td>
            <td>{data?.title}</td>
          </tr>
          <tr>
            <th>Body :</th>
            <td>:</td>
            <td>{data?.body}</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>:</td>
            <td>{data?.date}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>:</td>
            <td>
              <select
                defaultValue={data?.completed ? COMPLETED : PENDING}
                onChange={markTodoCompleted}
              >
                <option value={COMPLETED}>{COMPLETED}</option>
                <option value={PENDING}>{PENDING}</option>
              </select>
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
