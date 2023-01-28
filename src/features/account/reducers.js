import createReducer from '../../lib/createReducer';
import * as types from './actionTypes';

const initialState = {
  accountList: [],
};

export const accountReducer = createReducer(initialState, {
  [types.GET_ACCOUNT_REQUEST_SUCCESS](state, action) {
    return {
      ...state,
      accountList: action.info,
    };
  },
});
