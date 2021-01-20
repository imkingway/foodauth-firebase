import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


const FormButton = ({buttonTitle, ...rest}) => {
    return (
    <TouchableOpacity style={styles.button}{ ... rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>        
    )
}

export default FormButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: 150,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
})