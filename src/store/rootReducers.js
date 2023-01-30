/*
 * combines all th existing reducers
 */
import * as homeReducer from '../features/home/reducers';
import * as accountReducer from '../features/account/reducers';
import * as categoryReducer from '../features/category/reducers';

export default Object.assign({}, homeReducer, accountReducer, categoryReducer);
