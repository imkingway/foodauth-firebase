import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useContext(AuthContext);
    return (
      <ScrollView contentContainerStyle = {styles.container}>
       <Text style = {styles.text}>FoodAuth App</Text>
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
            <FormButton
                buttonTitle = "Sign In"
                onPress = {() => login(email, password)} 
            />
            <TouchableOpacity 
              style = {styles.footerView} 
              onPress = {() => navigation.navigate('Register')} >
                <Text style={styles.footerLink}>
                  Don't have an account? Sign up
                </Text>
            </TouchableOpacity>
          </ScrollView>
      );
};
        
export default LoginScreen; 

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center'
  },  
  logo: {
      flex: 1,
      height: 120,
      width: 90,
      alignSelf: "center",
      margin: 30
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
    fontSize: 28,
    marginBottom: 10,
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 140,
    marginBottom: 20,
  }
})