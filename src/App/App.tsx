import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import Header from "App/components/Header/Header";
import { AppWrapper, BodyWrapper, HeaderWrapper } from "App/styles/styled";
import { routes } from "App/pages/routes";

const FallbackComponent = ({ error }: FallbackProps) => {
  return <BodyWrapper>An error occurred: {error.message}</BodyWrapper>;
};

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <Routes>
              {routes?.map((route) => (
                <Route
                  path={route.href}
                  element={route.element}
                  key={route.id}
                />
              ))}
              <Route path="/*" element={<h1>NOT FOUND PAGE</h1>} />
            </Routes>
          </BodyWrapper>
        </AppWrapper>
      </ErrorBoundary>
    </div>
  );
};

export default App;
