import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../appContants";

const AddTodoButton = (): ReactElement => {
  console.log("Add To Do Btn");
  
  return (
    <div className="d-flex">
      <Link to={ROUTES.ADD}>
        <button className="add-button">Add Task</button>
      </Link>
    </div>
  );
};

export default React.memo(AddTodoButton);
