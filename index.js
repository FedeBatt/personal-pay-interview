/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
navigator.geolocation = require('@react-native-community/geolocation');
AppRegistry.registerComponent(appName, () => App);
