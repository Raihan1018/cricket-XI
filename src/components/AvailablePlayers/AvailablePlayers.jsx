import React, { use } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import PlayersCards from "../PlayersCards/PlayersCards";

const AvailablePlayers = ({ playersPromise, setCoin }) => {
  const playersData = use(playersPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {playersData.map((player) => (
        <PlayersCards setCoin={setCoin} key={player.id} player={player} />
      ))}
    </div>
  );
};

export default AvailablePlayers;
