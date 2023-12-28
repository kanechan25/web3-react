import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "App/pages/Homepage/Homepage";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import Header from "App/components/Header/Header";
import {
  AppWrapper,
  BodyWrapper,
  HeaderWrapper,
} from "App/styled/styledComponents";

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
              <Route path="/" element={<Homepage />} />
              <Route path="/tokenomics" element={<h1>TOKENOMICS</h1>} />
              <Route path="/roadmap" element={<h1>ROADMAP</h1>} />
              <Route path="/*" element={<h1>NOT FOUND</h1>} />
            </Routes>
          </BodyWrapper>
        </AppWrapper>
      </ErrorBoundary>
    </div>
  );
};

export default App;
