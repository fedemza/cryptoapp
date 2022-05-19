import React, { useEffect } from "react";

const CoinsInfo = ({ setCoins, setLoading }) => {
  useEffect(() => {
    fetch(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=500&currency=USD`
    )
      .then((response) => response.json())
      .then((data) => {
        setCoins(data.coins);
        setLoading(false);
      });
  }, []);

  return <></>;
};

export default CoinsInfo;
