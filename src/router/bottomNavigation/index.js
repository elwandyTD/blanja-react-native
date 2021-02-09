import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconIo from 'react-native-vector-icons/Ionicons';

import Home from '../../screens/Home';
import ShopRoute from './shop';
import ProfileRoute from './profile';
import Favorites from '../../screens/Favorites';
import Bag from '../../screens/Bag';

import styles from '../../styles/bottomNavbarStyle';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const tabBarOpt = {
    style: {
      elevation: 0,
      borderTopWidth: 0,
      borderTopColor: '#FFF',
      borderRadius: 12,
      backgroundColor: '#FFF',
      height: 60,
    },
  };
  const bottomIcon = (text, icon, type = 'io') => ({
    tabBarLabel: ({focused}) => {
      return (
        <Text
          style={{
            ...styles.label,
            ...{color: focused ? '#DB3022' : '#9B9B9B'},
          }}>
          {text}
        </Text>
      );
    },
    tabBarIcon: ({focused}) => {
      return type === 'io' ? (
        <IconIo name={icon} color={focused ? '#DB3022' : '#9B9B9B'} size={23} />
      ) : (
        <IconFA name={icon} color={focused ? '#DB3022' : '#9B9B9B'} size={23} />
      );
    },
  });

  return (
    <Tab.Navigator tabBarOptions={tabBarOpt}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={bottomIcon('Home', 'home')}
      />
      <Tab.Screen
        name="Cart"
        component={ShopRoute}
        options={bottomIcon('Shop', 'cart')}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={bottomIcon('Bag', 'shopping-bag', 'fa')}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={bottomIcon('Favorites', 'heart')}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileRoute}
        options={bottomIcon('Profile', 'user', 'fa')}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
