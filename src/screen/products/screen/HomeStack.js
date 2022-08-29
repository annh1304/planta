import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import Detail from './Detail';

const Stack = createStackNavigator();



const HomeStack = () => {
    return (
        // <View>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="Detail" component={Detail}/>
            </Stack.Navigator>
        // </View>
    )
}

export default HomeStack

const styles = StyleSheet.create({})
