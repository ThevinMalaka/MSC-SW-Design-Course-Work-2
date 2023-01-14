import {takeLatest} from 'redux-saga/effects';

import * as types from '../actionTypes';
import {testFunction} from './loginSaga';

export const loginSaga = [takeLatest(types.TEST_REQUEST, testFunction)];
