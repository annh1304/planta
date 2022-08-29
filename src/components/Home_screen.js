import React ,{useContext, createContext}from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const ThemeContext = createContext();

function ThemeButton(){
    const Theme = useContext(ThemeContext);
    return(
        <Text>

        </Text>
    );
}


const Stack = createStackNavigator();
const Home_screen = () => {
    return (
        <View style={{flex:1, padding:48}}>
            <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Đăng nhập" component={Home}/>
                <Stack.Screen name="Đăng ký" component={Home}/>
            </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default Home_screen
