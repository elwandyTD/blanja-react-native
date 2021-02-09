import 'react-native-gesture-handler';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from './public/redux/store';
import MainRouter from './router';
// import {SocketProvider} from './src/public/contexts/SocketProvider';

const appRouter = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <SocketProvider id={123456}> */}
        <MainRouter />
        {/* </SocketProvider> */}
      </PersistGate>
    </Provider>
  );
};
export default appRouter;
