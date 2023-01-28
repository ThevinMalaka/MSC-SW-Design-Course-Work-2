import * as types from './actionTypes';

export const createAccountRequest = info => ({
  type: types.CREATE_ACCOUNT_REQUEST,
  info,
});

export const createAccountRequestSuccess = info => ({
  type: types.CREATE_ACCOUNT_REQUEST_SUCCESS,
  info,
});

export const createAccountRequestFailed = info => ({
  type: types.CREATE_ACCOUNT_REQUEST_FAILED,
  info,
});

export const getAccountRequest = info => ({
  type: types.GET_ACCOUNT_REQUEST,
  info,
});

export const getAccountRequestSuccess = info => ({
  type: types.GET_ACCOUNT_REQUEST_SUCCESS,
  info,
});

export const getAccountRequestFailed = info => ({
  type: types.GET_ACCOUNT_REQUEST_FAILED,
  info,
});
