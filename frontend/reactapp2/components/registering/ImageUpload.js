// 6


import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

//todo impl
const ImageUpload = () => {
    const finishCreationAndEnterBrowser = () => {
        Actions.browser()
    };

    const goBackToLocationPicker = () => {
        Actions.locationpicker()
    };

    return (
        <View>
            <TouchableOpacity style={{margin: 128}} onPress={finishCreationAndEnterBrowser}>
                <Text>This is Image upload!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{margin: 128}} onPress={goBackToLocationPicker}>
                <Text>This is Image upload!</Text>
            </TouchableOpacity>
        </View>

    )
};
export default ImageUpload
