/**
 * @format
 */
//
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
//
// AppRegistry.registerComponent(appName, () => App);


import App from './App';
import React from 'react';
import { AppRegistry } from 'react-native';
//import * as serviceWorker from "./serviceWorker";

// register the app
AppRegistry.registerComponent('App', () => App);
AppRegistry.registerComponent('reactapp2', () => App);

// AppRegistry.runApplication('App', {
//     //initialProps: {},
//     rootTag: document.getElementById("root")
// });



//serviceWorker.unregister();