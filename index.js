/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import App from './App';
import { name as appName } from './app.json';
import { createAppContainer } from 'react-navigation';
//import { useScreens } from 'react-native-screens';
import { BottomTabNavigator } from './app/components'

//useScreens();

const App = createAppContainer(BottomTabNavigator);
AppRegistry.registerComponent(appName, () => App);
