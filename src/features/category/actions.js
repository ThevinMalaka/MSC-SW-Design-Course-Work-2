import * as types from './actionTypes';

export function createCategoryRequest(info) {
  return {
    type: types.ADD_NEW_CATEGORY_REQUEST,
    info,
  };
}

export function createCategoryRequestSuccess(data) {
  return {
    type: types.ADD_NEW_CATEGORY_SUCCESS,
    data,
  };
}

export function createCategoryRequestFailed() {
  return {
    type: types.ADD_NEW_CATEGORY_FAILURE,
  };
}

export function getCategoryListRequest() {
  return {
    type: types.GET_CATEGORY_LIST_REQUEST,
  };
}

export function getCategoryListRequestSuccess(info) {
  return {
    type: types.GET_CATEGORY_LIST_SUCCESS,
    info,
  };
}

export function getCategoryListRequestFailed() {
  return {
    type: types.GET_CATEGORY_LIST_FAILURE,
  };
}
