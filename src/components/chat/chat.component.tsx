import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { collection, doc } from "firebase/firestore";
import { Fragment, useEffect, useRef } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { selectRoomId } from "../../features/appSlice";
import db from "../../firebase-init";
import MessageComponent from "../message/message.component";
import ChatInput from "./chat-input.component";

type Props = {};

const ChatComponent = (props: Props) => {
  const roomId = useAppSelector(selectRoomId);
  const chatRef = useRef(null);

  const [roomMessages, loading] = useCollection(
    roomId && collection(doc(db, "rooms", roomId), "messages")
  );

  useEffect(() => {
    (chatRef?.current as any)?.scrollIntoView();
  }, [roomId, loading]);

  const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId));

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <Fragment>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data()?.name}</strong>
              </h4>
              <StarBorderIcon />
            </HeaderLeft>

            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessages>
            {roomMessages?.docs?.map((doc) => {
              const rest = doc.data();
              return <MessageComponent key={doc.id} {...rest} />;
            })}
            <ChatBottom />
          </ChatMessages>
          <ChatInput
            ref={chatRef}
            channelName={roomDetails?.data()?.name}
            channelId={roomId}
          />
        </Fragment>
      )}
    </ChatContainer>
  );
};

export default ChatComponent;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgrey;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-left: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 10px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const ChatMessages = styled.div``;
