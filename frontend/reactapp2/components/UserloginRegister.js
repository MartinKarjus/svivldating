
import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

//todo impl
const UserloginRegister = () => {

    const goToBrowsing = () => {
        Actions.browser()
    };

    const goToGenderPicker = () => {
        Actions.genderpicker()
    };

    return (
        <View>
            <TouchableOpacity style={{margin: 50}}>
                <Text>This is the login view, you are stuck here now!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 50}} onPress={goToBrowsing}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 50}} onPress={goToGenderPicker}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>

    )
};
export default UserloginRegister
