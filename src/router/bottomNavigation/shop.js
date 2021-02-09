import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Cart from '../../screens/Categories';
import Catalog from '../../screens/Catalog';

const Stack = createStackNavigator();

const ShopRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Catalog"
        component={Catalog}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopRoute;
