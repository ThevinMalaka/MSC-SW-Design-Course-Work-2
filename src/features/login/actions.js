import * as types from './actionTypes';

export function chnageActionStatus(info) {
  return {
    type: types.CHNAGE_ACTION_STATUS,
    info,
  };
}

export function testRequest(info) {
  return {
    type: types.TEST_REQUEST,
    info,
  };
}

export function testRequestSuccess(info) {
  return {
    type: types.TEST_REQUEST_SUCCESS,
    info,
  };
}

export function testRequestfailed() {
  return {
    type: types.TEST_REQUEST_FAILED,
  };
}
