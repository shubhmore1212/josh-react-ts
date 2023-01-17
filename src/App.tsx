import React, { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import RouteComponent from "./Route";

import "./App.css";

//creating-client
const queryClient = new QueryClient();

const App = (): ReactElement => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouteComponent />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
};

export default React.memo(App);
