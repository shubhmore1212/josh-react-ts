import React from "react";

interface IProps {
  showCompleted: boolean;
  statusHandler:()=>void
}

const TodoFilter: React.FC<IProps> = (props) => {
  return (
    <div className="show-completed-filter">
      <input
        type="checkbox"
        id="filter"
        checked={props.showCompleted}
        onChange={props.statusHandler}
      />
      <label htmlFor="filter">Show Completed</label>
    </div>
  );
};

export default React.memo(TodoFilter);
