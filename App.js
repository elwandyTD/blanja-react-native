import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import configureStore from './src/public/redux/store';

import SplashScreen from './src/screens/SplashScreen';
import Notification from './src/screens/Notifcation';
import BottomNavbar from './src/components/BottomNavbar';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import ForgotPass from './src/screens/auth/ForgotPass';
import ResetPass from './src/screens/auth/ResetPass';
import DetailProduct from './src/screens/DetailProduct';
import Checkout from './src/screens/Checkout';

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
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Sign Up"
              component={Register}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Forgot Password"
              component={ForgotPass}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Reset Password"
              component={ResetPass}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={BottomNavbar}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Detail"
              component={DetailProduct}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{
                headerShown: false,
              }}
            />
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
