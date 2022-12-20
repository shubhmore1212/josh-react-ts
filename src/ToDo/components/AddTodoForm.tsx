import React, { useState } from "react";

const AddTodoForm = ({ addTodo }: { addTodo: (todo: string) => void }) => {
  const [todo, setTodo] = useState("");

  return (
    <div className="d-flex">
      <input
        type="text"
        className="text"
        placeholder="Enter todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTodo("");
            addTodo(todo);
          }
        }}
      />
      <button
        className="add-button"
        onClick={() => {
          setTodo("");
          addTodo(todo);
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default React.memo(AddTodoForm);
