import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './Profile';
import EditProfile from './EditProfile';
import CartHistory from './CartHistory';

const Stack = createStackNavigator();

    
const ProfileStack = () => {
    return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="EditProfile" component={EditProfile}/>
                <Stack.Screen name="CartHistory" component={CartHistory}/>
            </Stack.Navigator>
    )
}

export default ProfileStack