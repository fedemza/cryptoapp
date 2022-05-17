import React, { useEffect } from "react";

const CoinsInfo = () => {
  useEffect(() => {
    fetch(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=USD`
    )
      .then((response) => response.json())
      .then((data) => {});
  }, []);

  return <div>CoinsInfo</div>;
};

export default CoinsInfo;
