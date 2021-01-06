import {combineReducers} from 'redux';

import deviceReducer from './device';
import productReducer from './product';

const reducers = combineReducers({
  device: deviceReducer,
  product: productReducer,
});

export default reducers;
