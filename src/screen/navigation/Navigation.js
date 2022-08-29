import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import UserNavigation from '../users/UserNavigation'
import ProductNavigation from '../products/ProductNavigation'

export default function Navigation (props) {
    const isLoggedIn = true;
    return (
        <NavigationContainer>
            {
                isLoggedIn == true ? <ProductNavigation/> : <UserNavigation/>
            }
        </NavigationContainer>
    )
}

// export default Navigation
