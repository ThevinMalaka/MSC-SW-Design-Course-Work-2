/*
 * combines all th existing reducers
 */
import * as homeReducer from '../features/home/reducers';

export default Object.assign({}, homeReducer);
