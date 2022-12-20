import React from "react";

import TodoContainer from "./ToDo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoContainer />
    </div>
  );
}

export default React.memo(App);
