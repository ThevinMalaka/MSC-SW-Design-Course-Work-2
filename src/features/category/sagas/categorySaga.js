import {put, call} from 'redux-saga/effects';
import httpStatus from 'http-status';

import * as action from '../actions';
import {addCategory, getCategory} from '../../../api/endpoints/home';
import showToast from '../../../utils/toast.utils';
import {navigateToHome} from '../../../navigation/NavigationHelpers';

export function* createCategoryFun(payload) {
  try {
    const {info} = payload;
    const {data, status} = yield call(addCategory, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(action.createCategoryRequestSuccess(data));
    yield call(showToast, {
      message: 'Success',
      description: 'Successfully created account',
      type: 'success',
    });
    yield call(navigateToHome);
  } catch (error) {
    yield put(action.createCategoryRequestFailed());
    yield call(showToast, {
      message: 'Failed',
      description: 'Something went wrong. Please try again later.',
      type: 'danger',
    });
  }
}

export function* getCategoryListFun(payload) {
  try {
    const {info} = payload;
    const {data, status} = yield call(getCategory, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(action.getCategoryListRequestSuccess(data));
  } catch (error) {
    yield put(action.getCategoryListRequestFailed());
  }
}
