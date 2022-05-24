import {
  GET_COIN_DETAILS,
  GET_CHANGE_ARG,
  GET_COINS,
  SEARCH_COINS,
} from "../actions/actionsTypes";

const initialState = {
  coins: [],
  allCoins: [],
  changeArg: null,
  coin_detail: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        coins: action.payload,
        allCoins: action.payload,
      };
    case GET_COIN_DETAILS:
      return {
        ...state,
        coin_detail: action.payload,
      };
    case GET_CHANGE_ARG:
      return {
        ...state,
        changeArg: action.payload,
      };
    case SEARCH_COINS:
      const allCoins = state.allCoins;
      const filteredCoins = allCoins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(action.payload) ||
          coin.symbol.toLowerCase().includes(action.payload)
      );

      return {
        ...state,
        coins: filteredCoins,
      };
    default:
      return state;
  }
}

export default rootReducer;
