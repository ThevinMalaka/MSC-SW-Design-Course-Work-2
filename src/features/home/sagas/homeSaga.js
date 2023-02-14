import {put, call} from 'redux-saga/effects';
import httpStatus from 'http-status';

import * as homeAction from '../actions';
import {
  home,
  addTransaction,
  getTransaction,
} from '../../../api/endpoints/home';
import showToast from '../../../utils/toast.utils';
import {navigateToHome} from '../../../navigation/NavigationHelpers';

export function* testFunction(payload) {
  try {
    const {info} = payload;
    const {data, status} = yield call(home, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(homeAction.testRequestSuccess());
  } catch (error) {
    yield put(homeAction.testRequestfailed());
  }
}

export function* addExpenses(payload) {
  try {
    const {info} = payload;
    const {data, status} = yield call(addTransaction, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(homeAction.addTransactionRequestSuccess());
    yield call(showToast, {
      message: 'Success',
      description: 'Successfully created new transaction',
      type: 'success',
    });
    yield call(navigateToHome);
  } catch (error) {
    yield put(homeAction.addTransactionRequestFailed());
    yield call(showToast, {
      message: 'Failed',
      description: 'Something went wrong. Please try again later.',
      type: 'danger',
    });
  }
}

export function* getTransacrionList(payload) {
  try {
    const {info} = payload;
    const {data, status} = yield call(getTransaction, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(homeAction.getTransactionRequestSuccess(data));
  } catch (error) {
    yield put(homeAction.getTransactionRequestFailed());
  }
}
