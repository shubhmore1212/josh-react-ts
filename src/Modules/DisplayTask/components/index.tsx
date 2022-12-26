import React from "react";
import { NavLink } from "react-router-dom";

import { InfinitySpin } from "react-loader-spinner";

import { ToDoData } from "../../../data/types/types";

interface IProps{
    data:ToDoData,
    loading:boolean,
    error:string,
    markTodoCompleted:(completed:string)=>void,
    deleteTodo:(id:number)=>void
}

const DisplayTaskComponent :React.FC<IProps> = ({data,loading,error,markTodoCompleted,deleteTodo}) => {
  return (
    <>
      {loading ? (
        <div className="loading-spinner">
          <InfinitySpin color="rgb(246, 162, 67)" width="200" />
        </div>
      ) : (
        <>
          {error === "" ? (
            <div className="display-table">
              <h1>To Do</h1>
              <div className="cross-button">
                <NavLink
                  className="cross-button-link"
                  title="Go to ToDo Page"
                  to="/"
                >
                  X
                </NavLink>
              </div>
              <table>
                <tbody>
                  <tr>
                    <th>ID :</th>
                    <td> {data.id}</td>
                  </tr>
                  <tr>
                    <th>Task :</th>
                    <td> {data.title}</td>
                  </tr>
                  <tr>
                    <th>Body :</th>
                    <td>{data.body}</td>
                  </tr>
                  <tr>
                    <th>Status :</th>
                    <td>
                      <select
                        defaultValue={
                          (data.completed as boolean) ? "Completed" : "Pending"
                        }
                        onChange={(e) => markTodoCompleted(e.target.value)}
                      >
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <button
                        className="delete-btn"
                        onClick={() => deleteTodo(data.id)}
                      >
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
