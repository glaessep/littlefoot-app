import React, { Fragment } from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from 'react-navigation';
import { StatusScreen, SettingsScreen, GalleryScreen } from '../screens';
import FootprintsNavigator from './FootprintsNavigator';


export default MainRouter = createBottomTabNavigator(
  {
    Status: StatusScreen,
    Footprints: FootprintsNavigator,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Status') {
          return <Image source={require('../assets/icons/status-icon.png')} style={{ width: 25, height: 25, tintColor: tintColor }} />
        } else if (routeName === 'Footprints') {
          return <Image source={require('../assets/icons/baby-footprints-filled.png')} style={{ width: 25, height: 25, tintColor: tintColor }} />
        } else if (routeName === 'Settings') {
          return <Image source={require('../assets/icons/settings-icon.png')} style={{ width: 25, height: 25, tintColor: tintColor }} />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#f0210a',
      //inactiveTintColor: 'grey',
      showLabel: false,
    },
  }
);
