import React from 'react'
import { View, Text } from 'react-native'

const Goodbye_screen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view2}>
            </View>
            <View style={styles.view3}>
            </View>
        </View>
    )
}

export default Goodbye_screen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:'10px',
        flexDirection: 'row',
        backgroundColor: 'orange',
        width : '100%',
        height : '100%'
    },
    view2:{
        backgroundColor: 'green',
        width: 100,
        height: 100
    },
    view3:{
        backgroundColor: 'blue',
        width: 100,
        height: 100
    },
})
