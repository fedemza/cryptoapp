import React, { useEffect } from "react";

const CoinInfoDetail = ({ coinId, setCoin }) => {
  useEffect(() => {
    fetch(`https://api.coinstats.app/public/v1/coins/${coinId}?currency=USD`)
      .then((response) => response.json())
      .then((data) => setCoin(data.coin));
  }, [coinId]);

  return <></>;
};

export default CoinInfoDetail;
