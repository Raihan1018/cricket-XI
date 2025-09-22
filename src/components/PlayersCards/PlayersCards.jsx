import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const PlayersCards = ({ player, setCoin, coin }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="card bg-base-100  shadow-xl p-5 border ">
      <figure>
        <img
          className="h-96 w-96"
          src={player.image_url}
          alt={player.player_name}
        />
      </figure>
      <div>
        <h2 className="card-title py-2">
          <FaUser />
          <span>{player.player_name}</span>
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center space-x-3 ">
            <FaFlag className="text-gray-500" />
            <p className="text-gray-500">{player.country}</p>
          </div>
          <div>
            <h4 className="badge badge-md">{player.type}</h4>
          </div>
        </div>
        <div className="divider"></div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4>Rating</h4>
            <p>{player.rating}/10</p>
          </div>
          <div className="flex justify-between items-center">
            <h5>{player.role}</h5>
            <p>{player.specialty}</p>
          </div>
          <div className="flex justify-between items-center">
            <h3>Price: {Number(player.price)}</h3>

            <button
              disabled={isSelected}
              onClick={() => {
                setIsSelected(true);
                setCoin(coin + player.price);
                toast(`${player.player_name} added successfully`)
              }}
              className="btn"
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersCards;
