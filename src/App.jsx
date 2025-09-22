import React, { Suspense, useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import { ToastContainer } from "react-toastify";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Spinner from "./components/Spinner/Spinner";

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const playersPromise = fetchPlayers();

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [coin, setCoin] = useState(10000);
  const handleCoin = () => {
    setCoin(coin + 50000);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <Header coin={coin} />
      <Banner handleCoin={handleCoin} />
      <div className="flex justify-between items-center my-5">
        <h1 className="font-semibold text-2xl">
          {toggle === true ? "Available Players" : "Selected Player (4/6) "}
        </h1>

        <div>
          <button
            onClick={() => setToggle(true)}
            className={`border border-gray-400 border-r-0 px-4 py-1.5 rounded-l-lg ${
              toggle === true ? "bg-[#E7FE29]" : ""
            } font-semibold`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border border-gray-400 border-l-0 px-4 py-1.5 rounded-r-lg font-semibold ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense fallback={<Spinner />}>
          <AvailablePlayers
            coin={coin}
            setCoin={setCoin}
            playersPromise={playersPromise}
          />
        </Suspense>
      ) : (
        <SelectedPlayers />
      )}

      <ToastContainer />
    </div>
  );
};

export default App;
