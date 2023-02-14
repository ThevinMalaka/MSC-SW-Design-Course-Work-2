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
  console.log('ssssss', info);
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

export function addTransactionRequest(info) {
  return {
    type: types.ADD_TRANSACTION_REQUEST,
    info,
  };
}

export function addTransactionRequestSuccess(info) {
  return {
    type: types.ADD_TRANSACTION_REQUEST_SUCCESS,
    info,
  };
}

export function addTransactionRequestFailed() {
  return {
    type: types.ADD_TRANSACTION_REQUEST_FAILED,
  };
}

export function getTransactionRequest(info) {
  return {
    type: types.GET_TRANSACTION_REQUEST,
    info,
  };
}

export function getTransactionRequestSuccess(info) {
  return {
    type: types.GET_TRANSACTION_REQUEST_SUCCESS,
    info,
  };
}

export function getTransactionRequestFailed() {
  return {
    type: types.GET_TRANSACTION_REQUEST_FAILED,
  };
}
