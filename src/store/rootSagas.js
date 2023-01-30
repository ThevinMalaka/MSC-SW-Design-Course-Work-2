/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */

import {all} from 'redux-saga/effects';
import {homeSaga} from '../features/home/sagas';
import {accountSaga} from '../features/account/sagas';
import {categorySaga} from '../features/category/sagas';

export default function* rootSaga() {
  yield all([...homeSaga]);
  yield all([...accountSaga]);
  yield all([...categorySaga]);
}
