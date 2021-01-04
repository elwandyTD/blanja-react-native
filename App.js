import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import configureStore from './src/public/redux/store';

import SplashScreen from './src/screens/SplashScreen';
import Test from './src/screens/Test';
import BottomNavbar from './src/components/BottomNavbar';

const {store, persistor} = configureStore();
const Stack = createStackNavigator();

const appRouter = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash Screen"
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
            {/* <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            /> */}
            <Stack.Screen
              name="Home"
              component={BottomNavbar}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Test" component={Test} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

// const mapsStateToProps = ({device}) => {
//   return {
//     device,
//   };
// };

// export default connect(mapsStateToProps)(appRouter);
export default appRouter;
