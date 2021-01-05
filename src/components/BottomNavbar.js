import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconIo from 'react-native-vector-icons/Ionicons';

import styles from '../styles/bottomNavbarStyle';

import Home from '../screens/Home';
import Cart from '../screens/Categories';
import Catalog from '../screens/Catalog';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Bag from '../screens/Bag';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ShopNavigation = () => {
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

const BottomNavbar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          borderTopWidth: 0,
          borderTopColor: '#FFF',
          borderRadius: 12,
          backgroundColor: '#FFF',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  ...styles.label,
                  ...{color: focused ? '#DB3022' : '#9B9B9B'},
                }}>
                Home
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <IconIo
                name="home"
                color={focused ? '#DB3022' : '#9B9B9B'}
                size={23}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ShopNavigation}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  ...styles.label,
                  ...{color: focused ? '#DB3022' : '#9B9B9B'},
                }}>
                Cart
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <IconIo
                name="cart"
                color={focused ? '#DB3022' : '#9B9B9B'}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          tabBarVisible: true,
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  ...styles.label,
                  ...{color: focused ? '#DB3022' : '#9B9B9B'},
                }}>
                Bag
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <IconFA
                name="shopping-bag"
                color={focused ? '#DB3022' : '#9B9B9B'}
                size={20}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  ...styles.label,
                  ...{color: focused ? '#DB3022' : '#9B9B9B'},
                }}>
                Favorites
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <IconIo
                name="heart"
                color={focused ? '#DB3022' : '#9B9B9B'}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  ...styles.label,
                  ...{color: focused ? '#DB3022' : '#9B9B9B'},
                }}>
                Profile
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <IconFA
                name="user"
                color={focused ? '#DB3022' : '#9B9B9B'}
                size={24}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavbar;
