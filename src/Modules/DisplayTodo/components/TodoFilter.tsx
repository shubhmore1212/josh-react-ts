import React, { ReactElement } from "react";

interface IProps {
  showCompleted: boolean;
  statusHandler: () => void;
}

const TodoFilter: React.FC<IProps> = (props): ReactElement => {
  const { showCompleted, statusHandler } = props;

  return (
    <div className="show-completed-filter">
      <input
        type="checkbox"
        id="filter"
        checked={showCompleted}
        onChange={statusHandler}
      />
      <label htmlFor="filter">Show Completed</label>
    </div>
  );
};

export default React.memo(TodoFilter);
