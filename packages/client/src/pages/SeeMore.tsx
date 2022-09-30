import React from "react";
import styled from "@emotion/styled/macro";

import BottomNavigation from "../components/Navigation/BottomNavigation";
import TopNavigation from "../components/Navigation/TopNavigation";
import UserInfo from "../components/SeeMore/UserInfo";
import InconButtonList from "../components/SeeMore/InconButtonList";

const SeeMore: React.FC = () => {
  return (
    <Base>
      <Container>
        <TopNavigation title="더보기" />

        <UserInfo username="이지현" telNo="010-8649-2676" />
        <InconButtonList />

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

export default SeeMore;
