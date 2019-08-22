import React, { Fragment } from 'react';
import { View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FootprintsScreen, GalleryScreen } from '../screens';


export default FootprintsNavigator = createStackNavigator(
  {
    Footprints: {
      screen: FootprintsScreen,
    },
    Gallery: {
      screen: GalleryScreen,
    },
  },
  {
    mode: 'modal',
    // This applies to the parent navigator
    navigationOptions: {
      tabBarLabel: 'Footprints',
    },
    // This applies to child routes
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#D9831F',
      },
      headerTintColor: '#fff',
    }
  });
