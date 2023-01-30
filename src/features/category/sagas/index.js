/**
 * Redux saga class init
 * There can be multiple sagas
 * Export them as an array
 * Top level sagas in store will take care of combining sagas
 */
import {takeLatest} from 'redux-saga/effects';

import * as types from '../actionTypes';
import {createCategoryFun, getCategoryListFun} from './categorySaga';

export const categorySaga = [
  takeLatest(types.ADD_NEW_CATEGORY_REQUEST, createCategoryFun),
  takeLatest(types.GET_CATEGORY_LIST_REQUEST, getCategoryListFun),
];
