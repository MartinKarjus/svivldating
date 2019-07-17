//3



import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

//todo impl
const LookingFor = () => {
    const goToAgePicker = () => {
        Actions.agepicker()
    };

    const goBackToGenderPicker = () => {
        Actions.genderpicker()
    };

    return (
        <View>
            <TouchableOpacity style={{margin: 128}} onPress={goToAgePicker}>
                <Text>This is Who you are looking for</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{margin: 128}} onPress={goBackToGenderPicker}>
                <Text>This is Who you are looking for</Text>
            </TouchableOpacity>
        </View>

    )
};
export default LookingFor