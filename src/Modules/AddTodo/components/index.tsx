import React from "react";
import { NavLink } from "react-router-dom";

interface IProps {
  title: string;
  setTitle: (title: string) => void;
  body: string;
  setBody: (body: string) => void;
  handleSubmit: (e: any) => void;
}

const AddTodoComponent: React.FC<IProps> = ({
  title,
  setTitle,
  body,
  setBody,
  handleSubmit,
}) => {
  return (
    <div className="add-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Add Todo</h2>
        <div>
          <label htmlFor="title">Task:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
        </div>
        <div>
          <label htmlFor="body">Details:</label>
          <textarea
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <br />
        </div>
        <div>
          <label htmlFor="completed">Status:</label>
          <input type="text" defaultValue={"false"} disabled />
          <br />
        </div>
        <input type="submit" value="Add Todo" />
      </form>
      <NavLink className={"link-home"} to="/">{`<< Go to ToDo-Page`}</NavLink>
    </div>
  );
};

export default React.memo(AddTodoComponent);
