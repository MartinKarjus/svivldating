/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/*
import React, {Fragment} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const App: React.FC = () => {
    return (
        <View>
            <Text> this is a test</Text>

        </View>
    )
};


export default App;
*/


import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Routes from './Routes.js'

class App extends Component {
//export default class App extends Component<{}> {
    render() {
        return (
            //<View>
             //   <Text>cake</Text>
            //</View>
            <Routes />
        )
    }
}

export default App
AppRegistry.registerComponent('App', () => App);



