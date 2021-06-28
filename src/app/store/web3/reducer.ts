import { Web3ActionTypes } from "./actions";
import { Web3State } from "./types";

const initial_state: Web3State = {
  wallet: null,
};

const reducer = (state: Web3State = initial_state, action: any) => {
  switch(action.type) {
    case Web3ActionTypes.WEB3_UPDATE:
      const { payload } = action;
      // const wallet: Web3Wallet | null = payload.wallet;
      return { ...state, ...payload };

    default:
      return state;
  }
}

export default reducer;