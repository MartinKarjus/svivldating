// 5

import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

//todo impl
const Location = () => {
    const goToImageUpload = () => {
        Actions.imageupload()
    };

    const goBackToAgePicker = () => {
        Actions.agepicker()
    };

    return (
        <View>
            <TouchableOpacity style={{margin: 128}} onPress={goToImageUpload}>
                <Text>This is Location picker!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{margin: 128}} onPress={goBackToAgePicker}>
                <Text>This is Location picker!</Text>
            </TouchableOpacity>
        </View>

    )
};
export default Location