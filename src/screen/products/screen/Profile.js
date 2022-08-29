import React from 'react'
import {StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const Profile = (props) => {
    const {navigation} = props;
    const {_id, name, address, phone, avatar, dob, email}=data;

    return (
        <View style={styles.container}>
            <Text style={styles.profileTitle}>Profile</Text>

            <View style={styles.userProfileContainer}>

                <View style={styles.avatarContainer}>{
                    avatar.trim().length == 0? 
                    <FontAwesome name="user-circle-o" size={24} color="black" /> 
                        :
                    <Image source={{uri:avatar}} resizeMode='cover' style={styles.userAvatar}/>
                }</View>

                <View style={styles.inforContainer}>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.emailText}>{email}</Text>
                </View>
            </View>

            <Pressable onPress={()=>navigation.navigate('EditProfile')}>
                <Text style={{fontSize:50}}>Edit Profile</Text>
            </Pressable>

            <Pressable onPress={()=>navigation.navigate('CartHistory')}>
                <Text style={{fontSize:50}}>Cart history</Text>
            </Pressable>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    nameText:{

    },
    nameText:{

    },
    inforContainer: {
        
    },

    userAvatar:{
        height:42,
        width:42
    },
    avatarContainer:{

    },
    userProfileContainer:{
        width:'100%',
        // height:'',
    },

    profileTitle:{
        paddingTop:60,
        justifyContent:'center',
        textAlign: 'center',
        lineHeight:20,
        fontWeight:'500',
        fontSize:16,
        textTransform:'uppercase'
    },
    container: {
        flex:1,
        backgroundColor:'white',

    }
})

var data = {
        _id: "61eaccfeda32720016356c8c",
        email: "anh130422@gmail.com",
        name:"Annh",
        phone:"0359246593",
        createdAt: "2022-01-21T15:10:54.099Z",
        updatedAt: "2022-01-21T15:10:54.099Z",
        avatar:"https://s120-ava-talk.zadn.vn/6/f/b/b/2/120/1f4351095358bb6f14d5ff6642f84a34.jpg",
        __v: 0
}
