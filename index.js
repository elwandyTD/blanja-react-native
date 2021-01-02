/**
 * @format
 */

import {AppRegistry} from 'react-native';
import appRouter from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => appRouter);
