import React, { ChangeEvent } from "react";
import { NavLink } from "react-router-dom";

import Loader from "../../../Shared/components/Loader";

import { ToDoData } from "../../../data/types/types";
import { ROUTES } from "../../../appContants";
import { TASK_STATE } from "../../../constant";

interface IProps {
  data: ToDoData;
  loading: boolean;
  error: string;
  markTodoCompleted: (e: ChangeEvent<HTMLSelectElement>) => void;
  modalHandler: () => void;
}

const DisplayTaskComponent: React.FC<IProps> = (props) => {
  const {
    data,
    loading,
    error,
    markTodoCompleted,
    modalHandler,
  } = props;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {!error ? (
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
                    <td> {data.id}</td>
                  </tr>
                  <tr>
                    <th>Task</th>
                    <td>:</td>
                    <td> {data.title}</td>
                  </tr>
                  <tr>
                    <th>Body :</th>
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
                      <select
                        defaultValue={data.completed ? "Completed" : "Pending"}
                        onChange={markTodoCompleted}
                      >
                        <option value={TASK_STATE.COMPLETED}>
                          {TASK_STATE.COMPLETED}
                        </option>
                        <option value={TASK_STATE.PENDING}>
                          {TASK_STATE.PENDING}
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <button className="delete-btn" onClick={modalHandler}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="error-msg">{error}</div>
          )}
        </>
      )}
    </>
  );
};

export default React.memo(DisplayTaskComponent);
