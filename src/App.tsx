import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./app.styles.scss";
import ChatComponent from "./components/chat/chat.component";
import HeaderComponent from "./components/header/header.component";
import SidebarComponent from "./components/sidebar/sidebar.component";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent />
        <AppBody>
          <SidebarComponent />
          <Routes>
            <Route path="/" element={<ChatComponent />} />
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
