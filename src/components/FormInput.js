import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions.js';

const FormInput = ({labelValue, placeholderText, ...rest}) => {
    return (
        <View style = {styles.inputContainer}>
            <TextInput 
                value = {labelValue}
                numberOfline = {1}
                placeholder = {placeholderText}
                placeholderTextColor = "#666"
                style={styles.input}
                {...rest}
                />
        </View>
)}

export default FormInput;

const styles = StyleSheet.create({
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    inputContainer: {
        marginTop: 5,
        marginBottom:10,
        width: '80%',
        height: windowHeight / 15,
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
      },
})