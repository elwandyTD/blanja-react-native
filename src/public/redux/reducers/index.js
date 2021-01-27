import {combineReducers} from 'redux';

import deviceReducer from './device';
import productReducer from './product';
import authReducer from './auth';
import attributeReducer from './attribute';
import profileReducer from './profile';
import transactionReducer from './transaction';

const reducers = combineReducers({
  device: deviceReducer,
  product: productReducer,
  auth: authReducer,
  attribute: attributeReducer,
  profile: profileReducer,
  transaction: transactionReducer,
});

export default reducers;
