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
  deleteTodo: (id: number) => void;
}

const DisplayTaskComponent: React.FC<IProps> = (props) => {
  return (
    <>
      {props.loading ? (
        <Loader />
      ) : (
        <>
          {!props.error ? (
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
                    <th>ID :</th>
                    <td> {props.data.id}</td>
                  </tr>
                  <tr>
                    <th>Task :</th>
                    <td> {props.data.title}</td>
                  </tr>
                  <tr>
                    <th>Body :</th>
                    <td>{props.data.body}</td>
                  </tr>
                  <tr>
                    <th>Status :</th>
                    <td>
                      <select
                        defaultValue={
                          props.data.completed ? "Completed" : "Pending"
                        }
                        onChange={props.markTodoCompleted}
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
                    <td colSpan={2}>
                      <button
                        className="delete-btn"
                        onClick={() => props.deleteTodo(props.data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="error-msg">{props.error}</div>
          )}
        </>
      )}
    </>
  );
};

export default React.memo(DisplayTaskComponent);
