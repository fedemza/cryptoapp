import {
  GET_CHANGE_ARG,
  GET_COINS,
  GET_COIN_DETAILS,
  SEARCH_COINS,
} from "./actionsTypes";

export function getCoins(setLoading) {
  return async function (dispatch) {
    try {
      let coins = await fetch(
        `https://api.coinstats.app/public/v1/coins?skip=0&limit=500&currency=USD`
      );
      coins = await coins.json();
      coins = await coins.coins;

      setLoading(false);
      return dispatch({
        type: GET_COINS,
        payload: coins,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function searchCoins(input) {
  return {
    type: SEARCH_COINS,
    payload: input,
  };
}

export function getChangeArg(setLoading) {
  return async function (dispatch) {
    try {
      let change = await fetch(
        `https://www.dolarsi.com/api/api.php?type=valoresprincipales`
      );
      change = await change.json();
      change = await change[0].casa.venta;

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

export function getCoinDetails(id, setLoading) {
  return async function (dispatch) {
    try {
      let coin = await fetch(
        `https://api.coinstats.app/public/v1/coins/${id}?currency=USD`
      );
      coin = await coin.json();
      coin = await coin.coin;

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
