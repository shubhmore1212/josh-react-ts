import React, { ReactElement } from "react";

import RouteComponent from "./Route";

import "./App.css";

const App = (): ReactElement => {
  return (
    <div className="App">
      <RouteComponent />
    </div>
  );
};

export default React.memo(App);
