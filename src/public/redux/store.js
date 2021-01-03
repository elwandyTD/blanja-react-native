import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from 'redux-persist/lib/storage';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //   AsyncStorage,
};

const logger = createLogger();

const enchancers = applyMiddleware(promiseMiddleware, logger);

const persistedReducers = persistReducer(persistConfig, reducers);

// const reduxStore = createStore(
//   persistedReducers,
//   composeWithDevTools(enchancers),
// );
// const reduxStore = createStore(
//   persistedReducers,
//   composeWithDevTools(enchancers),
// );

// let persistor = persistStore(reduxStore);

export default () => {
  let store = createStore(persistedReducers, composeWithDevTools(enchancers));
  // let store = createStore(persistedReducer)
  let persistor = persistStore(store);
  return {store, persistor};
};

// export {reduxStore, persistor};
