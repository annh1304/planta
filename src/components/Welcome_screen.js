import React ,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Welcome_screen = (props) => {
    const [name, setName] = useState('name1');
    const [age, setAge] = useState(18);
    
    //useeffect chay sau khi load xong component
    useEffect(() => {
        console.log('age run')
    });

    //useeffect chay sau khi load xong component, theo gioi thay doi cua const age
    useEffect(() => {
        console.log('age run')
    },[age]);

    return (
        <View>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Button title='click' onPress={() => setName('name2')}></Button>
            <Button title='click' onPress={() => setAge(19)}></Button>
        </View>
    )
}

export default Welcome_screen
