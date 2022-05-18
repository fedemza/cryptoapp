import React, { useEffect } from "react";

const CoinsInfo = ({ setCoins }) => {
  useEffect(() => {
    fetch(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=300&currency=USD`
    )
      .then((response) => response.json())
      .then((data) => {
        setCoins(data.coins);
      });
  }, []);

  return <></>;
};

export default CoinsInfo;
