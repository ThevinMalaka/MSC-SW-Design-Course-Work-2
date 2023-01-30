import createReducer from '../../lib/createReducer';
import * as types from './actionTypes';

const initialState = {
  categoryList: [],
};

export const categoryReducer = createReducer(initialState, {
  [types.GET_CATEGORY_LIST_SUCCESS](state, action) {
    return {
      ...state,
      categoryList: action.info,
    };
  },
});
