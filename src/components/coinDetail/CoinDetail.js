import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../commons/Loading";
import { getChangeArg, getCoinDetails } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import Coin from "./Coin";

const CoinDetail = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCoinDetails(id, setLoading));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getChangeArg(setLoading));
  }, [dispatch]);

  const coin = useSelector((state) => state.coin_detail);
  const changeArg = useSelector((state) => state.changeArg);

  if ((coin && coin === null) || coin === undefined) {
    navigate("*");
  }

  const icon = coin && coin.icon;
  const symbol = coin && coin.symbol;
  const name = coin && coin.name;
  const rank = coin && coin.rank;
  const marketCap = coin && coin.marketCap;
  const price = coin && coin.price.toFixed(2);
  const priceArg =
    coin && changeArg && (parseFloat(changeArg) * coin.price).toFixed(2);
  const priceChange1w = coin && coin.priceChange1w;
  const priceChange1d = coin && coin.priceChange1d;
  const priceChange1h = coin && coin.priceChange1h;
  const websiteUrl = coin && coin.websiteUrl;
  const twitterUrl = coin && coin.twitterUrl;

  return (
    <>
      {loading || !coin ? (
        <Loading />
      ) : (
        <Coin
          icon={icon}
          symbol={symbol}
          name={name}
          rank={rank}
          marketCap={marketCap}
          price={price}
          priceArg={priceArg}
          priceChange1w={priceChange1w}
          priceChange1d={priceChange1d}
          priceChange1h={priceChange1h}
          twitterUrl={twitterUrl}
          websiteUrl={websiteUrl}
        />
      )}
    </>
  );
};

export default CoinDetail;
