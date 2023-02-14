import createReducer from '../../lib/createReducer';
import * as types from './actionTypes';

const initialState = {
  testFunctionStatus: false,
  testEndpointData: [],
  transactionList: [],
};

export const homeReducer = createReducer(initialState, {
  [types.GET_TRANSACTION_REQUEST_SUCCESS](state, action) {
    return {
      ...state,
      transactionList: action.info,
    };
  },
  [types.TEST_REQUEST_SUCCESS](state, action) {
    return {
      ...state,
      testEndpointData: action.info,
    };
  },
  [types.TEST_REQUEST_FAILED](state, action) {
    return {
      ...state,
      testEndpointData: action.info,
    };
  },
});
