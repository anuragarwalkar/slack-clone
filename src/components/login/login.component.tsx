import Button from "@mui/material/Button";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase-init";

type Props = {};

const LoginComponent = (props: Props) => {
  const onLogin = (e: any) => {
    e.preventDefault();
    signInWithPopup(auth, provider);
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png"
          alt="img"
        />
        <h1>Sign in to Apple INC</h1>
        <p>apple.slack.com</p>
        <Button type="submit" onClick={onLogin}>
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default LoginComponent;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
