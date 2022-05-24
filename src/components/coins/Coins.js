import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../commons/Loading";
import SearchInput from "../search/SearchInput";
import TableCoinsValues from "./TableCoinsValues";
import Change from "../changeArg/Change";
import { getCoins } from "../../redux/actions";

const Coins = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getCoins(setLoading));
  }, [dispatch]);

  const coins = useSelector((state) => state.coins);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { md: "flex" },
          justifyContent: "space-around",
        }}
      >
        {!loading && <SearchInput coins={coins} />}
        {!loading && <Change />}
      </Box>

      {loading ? <Loading /> : <TableCoinsValues coins={coins} />}
    </>
  );
};

export default Coins;
