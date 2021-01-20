import React, { useState, useContext } from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';

const RegisterScreen = ({navigation}) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const {register} = useContext(AuthContext);
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style = {styles.text}> Create an Account</Text>
            <FormInput
                labelValue = {fullName}
                onChangeText = {(username) => setFullName(username)}
                placeholder='Full Name'
                autoCapitalize = "none"
                autoCorrect = {false}
                underlineColorAndroid="transparent"
                placeholderTextColor="#aaaaaa"
            />
            <FormInput
                labelValue = {email}
                onChangeText = {(userEmail) => setEmail(userEmail)}
                placeholder='E-mail'
                keyboardType = "email-address"
                autoCapitalize = "none"
                autoCorrect = {false}
                underlineColorAndroid="transparent"
                placeholderTextColor="#aaaaaa"
            />
            <FormInput
                labelValue = {password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholder='Password'
                placeholderTextColor="#aaaaaa"
                secureTextEntry = {true}
                value = {password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <FormInput
                labelValue = {confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholder='Confirm Password'
                placeholderTextColor="#aaaaaa"
                secureTextEntry = {true}
                value = {password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <FormButton
                buttonTitle = "Create Account"
                onPress={() => register(username, email, password)} 
            />
            <TouchableOpacity 
                style = {styles.footerView} 
                onPress = {() => navigation.navigate('Login')} >
            <Text style={styles.footerLink}>
                Don't have an account? Sign up
            </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default RegisterScreen; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },  
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 30,
      marginBottom: 10,
      color: "#788eec",
      fontWeight: "bold",
      marginTop: 50,
    }
  })