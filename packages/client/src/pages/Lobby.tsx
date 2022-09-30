import React from "react";
import BottomNavigation from "../components/Navigation/BottomNavigation";
import TopNavigation from "../components/Navigation/TopNavigation";

const Lobby: React.FC = () => {
  return (
    <div>
      <TopNavigation title="Lobby" />
      <BottomNavigation />
    </div>
  );
};

export default Lobby;
