import React from 'react'
import {StyleSheet, Text, View, Image ,Pressable ,TextInput,
        ScrollView, KeyboardAvoidingView} from 'react-native'

const Login = (props) => {
    const {navigation} = props;
    return (
        // <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>


                <View style={styles.container}>
                    <View style={styles.loginImageContainer}>
                        <Image style ={styles.loginImage}source = {require('../../../assets/images/Login_background.png')}/>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.planta}>Planta</Text>
                        <Text style={styles.introduction}>Mua sắm và trải nghiệm sản phẩm cây trồng cùng phụ kiện độc đáo duy nhất tại Việt Nam</Text>
                        <TextInput placeholder='Email' style={styles.textInput}/>
                        <TextInput placeholder='Password' style={styles.textInput} secureTextEntry/>
                        <Pressable style={styles.loginButton}>
                            <Text style={styles.login}>Đăng nhập</Text>
                        </Pressable>
                        <Text onPress={()=>navigation.navigate('Register')} style={styles.register}>Đăng ký</Text>
                    </View>
                </View>

            </ScrollView>
        // </KeyboardAvoidingView>
        
    )
}

export default Login

const styles = StyleSheet.create({
    register:{
        marginTop:11,
        color:'#000000',
        fontWeight:'400',
        fontSize:16,
        lineHeight:20,
        textAlign:'center',
        borderBottomColor:'black',
        borderBottomWidth:2
    },
    loginButton:{
        backgroundColor:'#7D7B7B',
        width:'100%',
        height:50,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    login:{
        color:'white',
        fontWeight:'500',
        fontSize:16,
        lineHeight:22,
    },
    textInput:{
        fontSize:16,
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1.5,
        marginVertical:14,
        // height:40,
        width:'100%',
    },
    introduction:{
        fontSize: 17,
        // paddingHorizontal:24,
        lineHeight:24,
        textAlign:'center'
    },
    planta:{
        color:'#007537',
        fontSize:36,
        fontWeight:'bold',
        paddingVertical:27,
    },
    formContainer:{
        justifyContent: 'center',
        paddingHorizontal:24,
        alignItems: 'center',
        // height: 92,
        // width:375
    },
    loginImage:{
        width: '100%',
        height: '100%',
    },
    loginImageContainer:{
        height: 390,
        width: '100%',
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    }
})
