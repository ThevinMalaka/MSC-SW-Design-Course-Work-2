/**
 * Redux saga class init
 * There can be multiple sagas
 * Export them as an array
 * Top level sagas in store will take care of combining sagas
 */
import {takeLatest} from 'redux-saga/effects';

import * as types from '../actionTypes';
import {createAccountFun, getAccountListFun} from './accountSaga';

export const accountSaga = [
  takeLatest(types.CREATE_ACCOUNT_REQUEST, createAccountFun),
  takeLatest(types.GET_ACCOUNT_REQUEST, getAccountListFun),
];
