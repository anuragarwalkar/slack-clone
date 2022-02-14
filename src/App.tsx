import React from "react";
import "./app.styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/header.component";

const HomePage = () => {
  return <HeaderComponent></HeaderComponent>;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
