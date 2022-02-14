import { Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./app.styles.scss";
import ChatComponent from "./components/chat/chat.component";
import HeaderComponent from "./components/header/header.component";
import LoginComponent from "./components/login/login.component";
import SidebarComponent from "./components/sidebar/sidebar.component";
import { auth } from "./firebase-init";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <BrowserRouter>
      <div className="App">
        {user ? (
          <Fragment>
            <HeaderComponent />
            <AppBody>
              <SidebarComponent />
              <Routes>
                <Route path="/" element={<ChatComponent />} />
              </Routes>
            </AppBody>
          </Fragment>
        ) : (
          <LoginComponent />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
