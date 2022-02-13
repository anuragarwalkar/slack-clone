import React from "react";
import "./app.styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = () => <h1>this is homepage</h1>;

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
