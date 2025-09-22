import React, { Suspense, useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const playersPromise = fetchPlayers();

const App = () => {
  const [coin, setCoin] = useState(0);
  const handleCoin = () => {
    setCoin(coin + 500);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <Header coin={coin} />
      <Banner handleCoin={handleCoin} />
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <AvailablePlayers playersPromise={playersPromise} />
      </Suspense>
      <ToastContainer />
    </div>
  );
};

export default App;
