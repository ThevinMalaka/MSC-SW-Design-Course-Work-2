import {put, call} from 'redux-saga/effects';
import httpStatus from 'http-status';

import * as action from '../actions';
import {createAccount, getAccountList} from '../../../api/endpoints/home';
import showToast from '../../../utils/toast.utils';
import {navigateToHome} from '../../../navigation/NavigationHelpers';

export function* createAccountFun(payload) {
  try {
    const {info} = payload;
    const {data, status} = yield call(createAccount, info);
    console.log('data', data);
    console.log('status', status);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(action.createAccountRequestSuccess(data?.entries));
    yield call(showToast, {
      message: 'Success',
      description: 'Successfully created account',
      type: 'success',
    });
    yield call(navigateToHome);
  } catch (error) {
    yield put(action.createAccountRequestFailed());
    yield call(showToast, {
      message: 'Failed',
      description: 'Something went wrong. Please try again later.',
      type: 'danger',
    });
  }
}

export function* getAccountListFun(payload) {
  try {
    const {info} = payload;
    const {data, status} = yield call(getAccountList, info);
    console.log('data', data);
    console.log('status', status);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(action.createAccountRequestSuccess(data?.entries));
  } catch (error) {
    yield put(action.createAccountRequestFailed());
  }
}
