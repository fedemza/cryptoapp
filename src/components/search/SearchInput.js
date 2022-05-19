import React from "react";
import TextField from "@mui/material/TextField";

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
        <TextField
          sx={{ mt: "10px", ml: "2px", border: "0.5px solid" }}
          id="search-bar"
          className="text"
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
