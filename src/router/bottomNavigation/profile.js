import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../../screens/Profile';
import MyOrders from '../../screens/MyOrders';

const Stack = createStackNavigator();

const ProfileRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="My Orders"
        component={MyOrders}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileRoute;
