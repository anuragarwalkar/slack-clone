import { addDoc, collection } from "firebase/firestore";
import { ComponentType } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";
import { enterRoom } from "../../features/appSlice";
import db from "../../firebase-init";

type AppProps = {
  addChannelOption?: boolean;
  title: string;
  id?: string;
  Icon?: ComponentType<any>;
};

function SidebarOption({ Icon, addChannelOption, title, id }: AppProps) {
  const dispatch = useAppDispatch();

  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      await addDoc(collection(db, "rooms"), {
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({ roomId: id }));
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px;
  font-weight: 300;
`;
