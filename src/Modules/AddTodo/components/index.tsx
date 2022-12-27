import React, { ChangeEvent, FormEvent } from "react";
import { NavLink } from "react-router-dom";

import { ROUTES } from "../../../appContants";
import { TASK_STATE } from "../../../constant";

interface IProps {
  title: string;
  titleHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  body: string;
  bodyHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const AddTodoComponent: React.FC<IProps> = (props) => {
  return (
    <div className="add-form">
      <form onSubmit={props.handleSubmit}>
        <h2>Add Todo</h2>
        <div>
          <label htmlFor="title">Task:</label>
          <input
            type="text"
            name="title"
            value={props.title}
            onChange={props.titleHandler}
          />
          <br />
        </div>
        <div>
          <label htmlFor="body">Details:</label>
          <textarea
            name="body"
            value={props.body}
            onChange={props.bodyHandler}
          />
          <br />
        </div>
        <div>
          <label htmlFor="completed">Status:</label>
          <input type="text" defaultValue={TASK_STATE.PENDING} disabled />
          <br />
        </div>
        <input type="submit" value="Add Todo" />
      </form>
      <NavLink
        className="link-home"
        to={ROUTES.HOME}
      >{`<< Go to ToDo-Page`}</NavLink>
    </div>
  );
};

export default React.memo(AddTodoComponent);
