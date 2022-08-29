import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from './Search';
import Detail from './Detail';

const Stack = createStackNavigator();



const SearchStack = () => {
    return (
        // <View>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Search" component={Search}/>
                <Stack.Screen name="Detail" component={Detail}/>
            </Stack.Navigator>
        // </View>
    )
}

export default SearchStack

const styles = StyleSheet.create({})
