/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import App from './App';
import { name as appName } from './app.json';
import { createAppContainer } from 'react-navigation';
import { BottomTabNavigator } from './app/components'

const App = createAppContainer(BottomTabNavigator);
AppRegistry.registerComponent(appName, () => App);
