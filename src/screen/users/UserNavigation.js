import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screen/Login';
import Register from './screen/Register';

const Stack = createStackNavigator();



const UserNavigation = () => {
    return (
        // <View>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
            </Stack.Navigator>
        // </View>
    )
}

export default UserNavigation

const styles = StyleSheet.create({})
