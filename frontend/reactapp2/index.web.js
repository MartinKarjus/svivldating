import React from 'react';
import {AppRegistry, View} from 'react-native';

const App = () => (
    <View style={{flex: 1}}>
        <Text> cake </Text>
    </View>
);
AppRegistry.registerComponent('MyReactNativeWeb', () => App);
AppRegistry.runApplication('MyReactNativeWeb', {
    rootTag: window.document.getElementById('react-root')
});