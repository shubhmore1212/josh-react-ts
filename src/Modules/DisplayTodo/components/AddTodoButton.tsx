import React from "react";
import { Link } from "react-router-dom";

const AddTodoButton = () => {
  return (
    <div className="d-flex">
      <Link to="/add-todo">
        <button className="add-button">Add Task</button>
      </Link>
    </div>
  );
};

export default React.memo(AddTodoButton);
