/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Fragment } from 'react';
import { Image } from "react-native";

import {
  HomeScreen, FriendsScreen, SettingsScreen
} from '../screens'

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const HomeStack = createStackNavigator({ HomeScreen }, {
  // This applies to the parent navigator
  navigationOptions: {
    tabBarLabel: 'Home',
  },
  // This applies to child routes
  defaultNavigationOptions: {
    title: 'Littlefoot',
    headerStyle: {
      backgroundColor: '#e83e8c',
    },
    headerTintColor: '#fff',
  }
});

const BottomTabNavigator = createBottomTabNavigator(
  {
    Steps: HomeStack,
    Friends: FriendsScreen,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Steps') {
          return <Image source={require('../assets/baby-footprints-filled.png')} style={{ width: 25, height: 25, tintColor: tintColor }} />
        } else if (routeName === 'Friends') {
          return <Image source={require('../assets/community-icon.png')} style={{ width: 25, height: 25, tintColor: tintColor }} />
        } else if (routeName === 'Settings') {
          return <Image source={require('../assets/settings-icon.png')} style={{ width: 25, height: 25, tintColor: tintColor }} />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#e83e8c',
      inactiveTintColor: 'grey',
    },
  }
);

export default BottomTabNavigator;

