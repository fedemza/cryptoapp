import React, { useState } from "react";
import CoinsInfo from "..info/CoinsInfo";

const Home = () => {
  const [coins, setCoins] = useState([]);

  return (
    <div>
      <CoinsInfo />
    </div>
  );
};

export default Home;
