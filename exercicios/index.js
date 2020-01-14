/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';

import {name as appName} from './app.json';

import Menu from './src/Menu'

AppRegistry.registerComponent(appName, () => Menu);
