import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled/macro";

interface ParamProps extends PropsWithChildren {}

const FriendList: React.FC = ({ children }: ParamProps) => {
  return <Base>{children}</Base>;
};

const Base = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 64px 0;
`;

export default FriendList;
