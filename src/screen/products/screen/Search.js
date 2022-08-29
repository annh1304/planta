import React from 'react'
import { StyleSheet, Text, View, Image, FlatList,TextInput, Pressable } from 'react-native'
import Navigation from '../../navigation/Navigation'

const Search = (props) => {
    const {navigation} = props;

    const renderItem = ({item}) => {
        const {name, price, quantity, images, _id} = item;
        return(
            <Pressable onPress={()=>navigation.navigate('Detail', {id: _id})} style={styles.categoryContainer}>
                <View style={styles.imagesContainer}>
                    <Image style={styles.imagesItem} source={{uri: item.images[0]}} />
                </View>
                <View style={styles.searchText}>
                <Text style={styles.nameItem}>{name}</Text>
                <Text style={styles.priceItem}>{price}</Text>
                <Text style={styles.quantityItem}>Còn {quantity} sp</Text>
                </View>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.textSearchContainer}>
                <Text style={styles.textSearch}>Tìm kiếm</Text>
            </View>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} placeholder='Tìm sản phẩm!'/>
                <View style={styles.searchIcon}> 
                    <Image source={require('../../../assets/images/Icon/search.png')} />
                </View>
            </View>
            <FlatList data={data}
            renderItem={renderItem}
            keyExtractor={item => item._id}/>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    imagesItem: {
        width: 100,
        height: 90
    },
    imagesContainer: {
        backgroundColor: '#F6F6F6',
        width: 90,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: 8
    },
    categoryContainer: {
       padding: 24,
       
    },
    searchIcon: {
        right: 48,
        position: 'absolute',
        top: 8
    },
    quantityItem: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        color: 'black'
    },
    priceItem: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        color: 'black'
    },
    nameItem: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        color: 'black'
    },
    searchText: {
        position: 'absolute',
        left: 130,
        top: 45,
    },
    textInput:{
        width: '100%',
        height: '100%',
        borderBottomColor: '#221F1F',
        borderBottomWidth: 1.5,
        paddingRight: 23
    },
    textInputContainer:{
        paddingHorizontal: 48,
        height: 40,
        position: 'relative'
    },
    textSearch:{
        fontSize: 16,
        fontWeight:'500',
        textTransform:'uppercase'
    },
    textSearchContainer:{
        alignItems:'center',
        paddingTop: 50,
    },
    container: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
})

var data = [
    {
        "sold": 73,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3a",
        "name": "Lygeum Loefl. ex L.",
        "price": 3,
        "madein": "Mexico",
        "quantity": 3781040078,
        "category": "61d11bf386511f0016f490c9",
        "size": "2XL",
        "createdAt": "2021-11-18T02:13:41.000Z",
        "updatedAt": "2021-12-21T06:00:50.000Z"
    }
]
