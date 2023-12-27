import "./App.css";
import React from "react";
import Homepage from "App/pages/Homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

import {
  AppWrapper,
  BodyWrapper,
  HeaderWrapper,
} from "App/styled/styledComponents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/demo",
    element: <div>demo</div>,
  },
]);
const FallbackComponent = ({ error }: FallbackProps) => {
  return <h1>An error occurred: {error.message}</h1>;
};
const App = () => {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <AppWrapper>
          <HeaderWrapper>Header</HeaderWrapper>
          <BodyWrapper>
            <RouterProvider router={router} />
          </BodyWrapper>
        </AppWrapper>
      </ErrorBoundary>
    </div>
  );
};

export default App;
