import React, { useState } from "react";
import Box from "@mui/material/Box";
import Loading from "../commons/Loading";

import CoinsInfo from "../../data/CoinsInfo";
import SearchInput from "../search/SearchInput";
import TableCoins from "./TableCoins";
import Change from "./Change";

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
      <Box
        sx={{
          flexGrow: 1,
          display: { md: "flex" },
          justifyContent: "space-around",
        }}
      >
        {loading ? (
          <> </>
        ) : (
          <SearchInput setCoins={setCoins} apiInfo={apiInfo} />
        )}
        <Change />
      </Box>

      {loading ? <Loading /> : <TableCoins coins={coins} />}
    </>
  );
};

export default Coins;
