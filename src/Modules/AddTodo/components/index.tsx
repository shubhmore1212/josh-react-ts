import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { ROUTES } from "../../../appContants";
import {
  FormSubmitEvent,
  InputChangeEvent,
  TASK_STATE,
  TextAreaChangeEvent,
} from "../../../constant";

interface IProps {
  title: string;
  titleHandler: (e: InputChangeEvent) => void;
  body: string;
  bodyHandler: (e: TextAreaChangeEvent) => void;
  date: string;
  dateHandler: (e: InputChangeEvent) => void;
  handleSubmit: (e: FormSubmitEvent) => void;
}

const AddTodoComponent: React.FC<IProps> = (props): ReactElement => {
  const {
    title,
    titleHandler,
    body,
    bodyHandler,
    date,
    dateHandler,
    handleSubmit,
  } = props;

  return (
    <div className="add-task-form">
      <div className="cross-button">
        <NavLink className="cross-button-link" to={ROUTES.HOME}>
          X
        </NavLink>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Add Todo</h2>
        <div className="form-control">
          <label htmlFor="title">Task:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={titleHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="due-date">Due Date:</label>
          <input type="date" name="date" value={date} onChange={dateHandler} />
        </div>
        <div className="form-control">
          <label htmlFor="body">Details:</label>
          <textarea name="body" value={body} onChange={bodyHandler} />
        </div>
        <div className="form-control">
          <label htmlFor="completed">Status:</label>
          <input
            id="disable-input"
            className="disable-input"
            type="text"
            defaultValue={TASK_STATE.PENDING}
            disabled
          />
        </div>
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default React.memo(AddTodoComponent);
