import React from 'react';
import {} from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = () => {
    const {user, logout} = useContext(AuthContext);
    return (
        <View>
            <Text> Welcome {user.id}</Text>
            <FormButton buttonTitle='Logout' onPress = {() => logout()}/>
        </View>
    )
}

export default HomeScreen;