/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { useScreens } from 'react-native-screens'
useScreens();

import { createAppContainer } from 'react-navigation';
import { MainRouter } from './app/routes';



const App = createAppContainer(MainRouter);
AppRegistry.registerComponent(appName, () => App);
