import React from "react";
import styled from "@emotion/styled/macro";
import TopNavigation from "../components/Navigation/TopNavigation";
import BottomNavigation from "../components/Navigation/BottomNavigation";
import ChatRoomList from "../components/ChatRoomList";
import { useQuery } from "react-query";
import { fetchChatRoomList } from "../apis/roomApi";
import { AxiosError, AxiosResponse } from "axios";
import { IRoom } from "../types";
import ChatRoom from "../components/ChatRoomList/ChatRoom";

const RoomList: React.FC = () => {
  const { data: chatRoomListData } = useQuery<
    AxiosResponse<Array<IRoom>>,
    AxiosError
  >("fetchChatRoomList", fetchChatRoomList);

  return (
    <Base>
      <Container>
        <TopNavigation title="채팅" />
        {chatRoomListData && (
          <ChatRoomList>
            {chatRoomListData.data.map((chatRoom) => (
              <ChatRoom
                key={chatRoom.id}
                id={chatRoom.id}
                username={chatRoom.user.username}
              />
            ))}
          </ChatRoomList>
        )}

        <ChatRoomList />

        <BottomNavigation />
      </Container>
    </Base>
  );
};

const Base = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 12px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default RoomList;
