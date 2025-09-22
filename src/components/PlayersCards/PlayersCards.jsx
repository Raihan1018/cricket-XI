import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const PlayersCards = ({ player }) => {
  return (
    <div className="card bg-base-100  shadow-xl p-5 border hover:-translate-y-3 duration-200 ease-in-out transition-all">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div>
        <h2 className="card-title py-2">
          <FaUser />
          <h2>{player.player_name}</h2>
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
            <h3>Price: {player.price}</h3>
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersCards;
