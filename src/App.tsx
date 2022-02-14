import React, { Fragment } from "react";
import "./app.styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import styled from "styled-components";
import SidebarComponent from "./components/sidebar/sidebar.component";

const HomePage = () => {
  return <Fragment></Fragment>;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent />
        <AppBody>
          <SidebarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AppBody>
      </div>
    </BrowserRouter>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
