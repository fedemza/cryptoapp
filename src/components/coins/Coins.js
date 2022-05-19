import React, { useState } from "react";
import Loading from "../commons/Loading";

import CoinsInfo from "../info/CoinsInfo";
import SearchInput from "../search/SearchInput";
import TableCoins from "./TableCoins";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [apiInfo, setApiInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CoinsInfo
        setApiInfo={setApiInfo}
        setCoins={setCoins}
        setLoading={setLoading}
      />
      {loading ? <> </> : <SearchInput setCoins={setCoins} apiInfo={apiInfo} />}

      {loading ? <Loading /> : <TableCoins coins={coins} />}
    </>
  );
};

export default Coins;
