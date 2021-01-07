import {combineReducers} from 'redux';
import {persistCombineReducers} from 'redux-persist';

import deviceReducer from './device';
import productReducer from './product';
import authReducer from './auth';
import attributeReducer from './attribute';

const reducers = combineReducers({
  device: deviceReducer,
  product: productReducer,
  auth: authReducer,
  attribute: attributeReducer,
});

export default reducers;
