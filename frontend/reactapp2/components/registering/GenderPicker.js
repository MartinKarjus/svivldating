// 2


import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

//todo impl
const GenderPicker = () => {
    const goToLookingFor = () => {
        Actions.lookingfor()
    };

    const goBackToLoginRegister = () => {
        Actions.userloginregister()
    };

    return (
        <View>
            <TouchableOpacity style={{margin: 128}} onPress={goToLookingFor}>
                <Text>This is GenderPicker</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{margin: 128}} onPress={goBackToLoginRegister}>
                <Text>This is GenderPicker</Text>
            </TouchableOpacity>
        </View>

    )
};
export default GenderPicker