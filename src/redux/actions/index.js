import React from "react";
//import { useNavigate } from "react-router-dom";
import { GET_CHANGE_ARG, GET_COIN_DETAILS } from "./actionTypes";

export function getChangeArg(setLoading) {
  return async function (dispatch) {
    try {
      var change = await fetch(
        `https://www.dolarsi.com/api/api.php?type=valoresprincipales`
      )
        .then((response) => response.json())
        .then((response) => response[0].casa.venta)
        .then((response) => {
          return response;
        });
      setLoading(false);
      return dispatch({
        type: GET_CHANGE_ARG,
        payload: change,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

// const ChangeArgInfo = () => {
//   fetch(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`)
//     .then((response) => response.json())
//     .then((response) => response[0].casa.venta)
//     .then((response) => {
//       return response;
//     });
// };

export function getCoinDetails(id, setLoading) {
  return async function (dispatch) {
    try {
      const coin = await fetch(
        `https://api.coinstats.app/public/v1/coins/${id}?currency=USD`
      )
        .then((response) => response.json())
        .then((data) => {
          //   if (data.coin === null || data.coin === undefined) {
          //     navigate("*");
          //   }
          console.log(data.coin);
          return data.coin;
        });
      console.log("soy coin de actions", coin);
      setLoading(false);
      return dispatch({
        type: GET_COIN_DETAILS,
        payload: coin,
      });
    } catch (e) {
      console.log(e);
    }
  };
}
const coinInfoDetail = (id) => {
  // let navigate = useNavigate();

  fetch(`https://api.coinstats.app/public/v1/coins/${id}?currency=USD`)
    .then((response) => response.json())
    .then((data) => {
      //   if (data.coin === null || data.coin === undefined) {
      //     navigate("*");
      //   }
      console.log(data.coin);
      return data.coin;
    });
};
