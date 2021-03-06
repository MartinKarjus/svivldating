import { Formik } from 'formik';
import React from 'react';
import { Button, TextInput, View } from 'react-native';

const SimpleForm = () => (
    <Formik
        onSubmit={({ firstName, lastName }) => {
            console.log(`firstName: ${firstName}`);
            console.log(`lastName: ${lastName}`);
        }}
        render={({
                     handleChange,
                     handleSubmit,
                     values: { firstName, lastName }
                 }) => (
            <View>
                <TextInput
                    onChangeText={handleChange('firstName')}

                    value={firstName}
                />
                <TextInput
                    onChangeText={handleChange('lastName')}

                    value={lastName}
                />
                <Button
                    title="Submit Simple"
                    onPress={handleSubmit}
                />
            </View>
        )}
    />
);

export default SimpleForm;