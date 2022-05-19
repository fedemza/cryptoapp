import React, { useState } from "react";
import Loading from "../commons/Loading";

import CoinsInfo from "../info/CoinsInfo";
import TableCoins from "./TableCoins";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CoinsInfo setCoins={setCoins} setLoading={setLoading} />
      {loading ? <Loading /> : <TableCoins coins={coins} />}
    </>
  );
};

export default Coins;
