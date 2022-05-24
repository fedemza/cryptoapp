import { GET_COIN_DETAILS, GET_CHANGE_ARG } from "../actions/actionTypes";

const initialState = {
  coins: [],
  changeArg: null,
  coin_detail: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}

export default rootReducer;
