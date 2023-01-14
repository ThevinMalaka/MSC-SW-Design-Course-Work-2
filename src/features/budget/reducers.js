import createReducer from '../../lib/createReducer';
import * as types from './actionTypes';

const initialState = {
  testFunctionStatus: false,
  testEndpointData: [],
};

export const homeReducer = createReducer(initialState, {
  [types.CHNAGE_ACTION_STATUS](state, action) {
    return {
      ...state,
      testFunctionStatus: action.info,
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
