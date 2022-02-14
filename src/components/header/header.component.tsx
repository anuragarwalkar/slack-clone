import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../../firebase-init";

function HeaderComponent() {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar src={user?.photoURL} alt={user?.displayName} />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon></SearchIcon>
        <input type="text" placeholder="Search" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineOutlinedIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default HeaderComponent;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: grey;
  border: 1px grey solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: #3f0f40;
  color: white;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  flex: 0.3;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderAvatar: any = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
