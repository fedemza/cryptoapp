import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ setCoins, apiInfo }) => {
  const filterCoins = (e) => {
    e.preventDefault();

    const coinsFiltered = apiInfo.filter((coin) =>
      coin.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setCoins(coinsFiltered);
  };

  return (
    <>
      <form>
        <SearchIcon color="primary" fontSize="large" sx={{ mt: "13px" }} />
        <TextField
          sx={{ mt: "10px", ml: "2px", border: "0.5px solid darkblue" }}
          onChange={(e) => {
            filterCoins(e);
          }}
          variant="outlined"
          placeholder="Buscar..."
          size="small"
        />
      </form>
    </>
  );
};

export default SearchInput;
