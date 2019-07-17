// 4

import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

//todo impl
const AgePicker = () => {
    const goToLocation = () => {
        Actions.locationpicker()
    };

    const goBackToLookingFor = () => {
        Actions.lookingfor()
    };

    return (
        <View>
            <TouchableOpacity style={{margin: 128}} onPress={goToLocation}>
                <Text>This is Agepicker!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{margin: 128}} onPress={goBackToLookingFor}>
                <Text>This is Agepicker!</Text>
            </TouchableOpacity>
        </View>

    )
};
export default AgePicker