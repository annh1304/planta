import React from 'react'
import { View, Text, Button } from 'react-native'

const Parent = (props) => {
    const {children} = props;

    const onButtonPress = () =>{
        setChildren('children'); 
        // đổi giá trị trong biến
    }

    return (
        <View>
            <Text>component parent</Text>
            <Text>{children}  {/* cú pháp viêt, để đọc ra {children} */}</Text>
            <Button onPress={onButtonPress} title='click me'>
        </View>
    )
}


export default Parent
