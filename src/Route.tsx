import React, { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ROUTES } from "./appContants";

import TodoContainer from "./Modules/DisplayTodo";
import AddTodoContainer from "./Modules/AddTodo";
import DisplayTaskContainer from "./Modules/DisplayTask";

const routes = [
  {
    path: ROUTES.HOME,
    component: TodoContainer,
  },
  {
    path: ROUTES.DISPLAY,
    component: DisplayTaskContainer,
  },
  {
    path: ROUTES.ADD,
    component: AddTodoContainer,
  },
];

const RouteComponent = (): ReactElement => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </Router>
  );
};

export default React.memo(RouteComponent);
