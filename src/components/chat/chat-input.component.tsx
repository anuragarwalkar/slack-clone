import Button from "@mui/material/Button";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import db, { auth } from "../../firebase-init";

type Props = {
  channelId: string;
  channelName: string;
  innerRef: any;
};

const ChatInput = ({ innerRef, channelId, channelName }: Props) => {
  const [currentInput, setCurrentInput] = useState("");
  const [user] = useAuthState(auth);

  const onChangeInput = (e: any) => {
    setCurrentInput(e.target.value);
  };

  const sendMessage = async (e: any) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }

    const docRef = doc(db, "rooms", channelId);

    await addDoc(collection(docRef, "messages"), {
      message: currentInput,
      timestamp: serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });

    setCurrentInput("");
  };

  return (
    <ChatInputContainer ref={innerRef}>
      <form>
        <input
          type="text"
          value={currentInput}
          onChange={onChangeInput}
          placeholder={`Message #${channelName}`}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`;
