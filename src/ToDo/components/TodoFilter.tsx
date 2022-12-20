import React from "react";

const TodoFilter = ({
  showCompleted,
  setShowCompleted,
}: {
  showCompleted: boolean;
  setShowCompleted: (showCompleted: boolean) => void;
}) => {
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
