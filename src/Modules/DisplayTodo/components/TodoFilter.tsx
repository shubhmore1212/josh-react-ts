import React from "react";

interface IProps {
  showCompleted: boolean;
  setShowCompleted: (showCompleted: boolean) => void;
}

const TodoFilter: React.FC<IProps> = ({ showCompleted, setShowCompleted }) => {
  return (
    <div className="show-completed-filter">
      <input
        type="checkbox"
        id="filter"
        checked={showCompleted}
        onChange={() => setShowCompleted(!showCompleted)}
      />
      <label htmlFor="filter">Show Completed</label>
    </div>
  );
};

export default React.memo(TodoFilter);
