import React from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import { searchCoins } from "../../redux/actions";

const SearchInputContainer = () => {
  const dispatch = useDispatch();

  const filterCoins = (e) => {
    e.preventDefault();

    dispatch(searchCoins(e.target.value.toLowerCase()));
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

export default SearchInputContainer;
