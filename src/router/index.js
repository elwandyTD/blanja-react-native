import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import BottomNavbar from './bottomNavigation/index';
import SplashScreen from '../screens/SplashScreen';
import Notification from '../screens/Notifcation';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgotPass from '../screens/auth/ForgotPass';
import ResetPass from '../screens/auth/ResetPass';
import DetailProduct from '../screens/DetailProduct';
import Checkout from '../screens/Checkout';
import ShippingAdress from '../screens/ShippingAdress';
import Success from '../screens/Success';
import AddShippingAddress from '../screens/AddShippingAddress';
import SellerProduct from '../screens/SellerProduct';
import AddProduct from '../screens/AddProduct';
import Chat from '../screens/Chat';
import Otp from '../screens/auth/Otp';
import UpdateShippingAddress from '../screens/UpdateShippingAddress';

const Stack = createStackNavigator();

const MainRouter = () => {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user.data) {
      console.log('ADADADDDDADDDDDDDDDDDDDDD');
    } else {
      console.log('XXXXXXXXXXXXXXXXXXXXXXXXX');
    }
  }, [user]);

  return (
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
          name="Sign In"
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
          name="OTP"
          component={Otp}
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
          name="Shipping Address"
          component={ShippingAdress}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
                name="My Orders"
                component={MyOrders}
                options={{
                  headerShown: false,
                }}
              /> */}
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Add Shipping Address"
          component={AddShippingAddress}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Update Shipping Address"
          component={UpdateShippingAddress}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Add Product"
          component={AddProduct}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Seller Products"
          component={SellerProduct}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
