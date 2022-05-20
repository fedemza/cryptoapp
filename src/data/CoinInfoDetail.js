import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CoinInfoDetail = ({ coinId, setCoin, setLoading }) => {
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`https://api.coinstats.app/public/v1/coins/${coinId}?currency=USD`)
      .then((response) => response.json())
      .then((data) => {
        if (data.coin === null || data.coin === undefined) {
          navigate("*");
        }
        setCoin(data.coin);
        setLoading(false);
      });
  }, [coinId, navigate, setCoin, setLoading]);

  return <></>;
};

export default CoinInfoDetail;
