import {combineReducers} from 'redux';

import deviceReducer from './device';

const reducers = combineReducers({
  device: deviceReducer,
});

export default reducers;
