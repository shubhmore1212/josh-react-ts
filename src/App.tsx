import React from "react";

import RouteComponent from "./Route";

import "./App.css";

function App() {
  return (
    <div className="App">
      <RouteComponent />
    </div>
  );
}

export default React.memo(App);
