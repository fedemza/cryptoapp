import React from "react";
import { useParams } from "react-router-dom";
import Change from "../changeArg/Change";
import CoinDetail from "./CoinDetail";

const CoinDetailContainer = () => {
  let { id } = useParams();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Change />
      </div>
      <CoinDetail id={id} />
    </>
  );
};

export default CoinDetailContainer;
