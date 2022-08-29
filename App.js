import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/users/screen/Login';
import Navigation from './src/screen/navigation/Navigation';
import UserNavigation from './src/screen/users/UserNavigation';

export default function App() {
  return (
    // <View style={{flex:1}}>
      <Navigation/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
