import { Field, Formik } from 'formik';
import React from 'react';
import { Button, View } from 'react-native';
import FKTextInput from '../FKTextInput';

const validate = ({ firstName, lastName }) => {

    const errors = {};
    if (firstName === undefined) {
        errors.firstName = 'Required';
    } else if (firstName.trim() === '') {
        errors.firstName = 'Must not be blank';
    }
    if (lastName === undefined) {
        errors.lastName = 'Required';
    } else if (lastName.trim() === '') {
        errors.lastName = 'Must not be blank';
    }
    return errors;
};
const ValidationForm = () => (


    <Formik
        validate ={validate}
        onSubmit={({ firstName, lastName }) => {
            console.log(`firstName: ${firstName}`);
            console.log(`lastName: ${lastName}`);
        }}
        render={({
                     handleSubmit,
                     isValid,
                 }) => (
            <View>
                <Field
                    component={FKTextInput}
                    name="firstName"
                />
                <Field
                    component={FKTextInput}
                    name="lastName"
                />
                <Button
                    title="Submit Refactor"
                    disabled = {!isValid}
                    onPress={handleSubmit}
            />
            </View>
            )}
    />

);


export default ValidationForm;
