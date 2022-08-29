import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Cart from './screen/Cart'
import SearchStack from'./screen/SearchStack'
import HomeStack from './screen/HomeStack'
import ProfileStack from './screen/ProfileStack'




const Tab = createBottomTabNavigator();

const ProductNavigation = () => {
    return (
        // <View>
            <Tab.Navigator screenOptions={  ({route}) => ({
                    tabBarIcon: () => {
                        if(route.name=='HomeStack'){
                            return <Image source={require('../../assets/images/Icon/home.png')}/>
                        }else if(route.name=='SearchStack'){
                            return <Image source={require('../../assets/images/Icon/search.png')}/>
                        }else if(route.name=='Cart'){
                            return <Image source={require('../../assets/images/Icon/cart.png')}/>
                        }else if(route.name=='ProfileStack'){
                            return <Image source={require('../../assets/images/Icon/user.png')}/>
                        }
                    },
                    tabBarLabel:({focused}) => {
                        if(route.name == 'HomeStack' && focused) {
                            return <Image source={require('../../assets/images/Icon/dot.png')}/>
                        }else if(route.name == 'SearchStack' && focused) {
                            return <Image source={require('../../assets/images/Icon/dot.png')}/>
                        }else if(route.name == 'Cart' && focused) {
                            return <Image source={require('../../assets/images/Icon/dot.png')}/>
                        }else if(route.name == 'ProfileStack' && focused) {
                            return <Image source={require('../../assets/images/Icon/dot.png')}/>
                        }return null;
                    },
                    headerShown: false,
                })}>
                <Tab.Screen name="HomeStack" component={HomeStack}/>
                <Tab.Screen name="SearchStack" component={SearchStack}/>
                <Tab.Screen name="Cart" component={Cart}/>
                <Tab.Screen name="ProfileStack" component={ProfileStack}/>
            </Tab.Navigator>
        // </View>
    )
}

export default ProductNavigation

const styles = StyleSheet.create({})
