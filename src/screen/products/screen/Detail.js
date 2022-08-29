import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import PagerView from 'react-native-pager-view';


const PartialView = (props) => {
    const [amount, setAmount] = useState(0);
    const {price, size, madein, quantity} = props; 

    const onAmountChange = (isAdd)=>{
        if(isAdd == true){
            setAmount(amount+1);
        }else if(isAdd==false && amount>=1){
            setAmount(amount-1);
        }
    }

    return(
        <>
            <View style={styles.productInforContainer}>
                <Text style={styles.productPrice}>{price} đ</Text>
                <Text style={styles.productDetailTitle}>Chi tiết sản phẩm</Text>
                <View style={styles.productDetail}> 
                    <Text style={styles.productDetailText}>Kích cỡ</Text>
                    <Text style={styles.productDetailText}>{size}</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Xuất Xứ</Text>
                    <Text style={styles.productDetailText}>{madein}</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Tình trạng</Text>
                    <Text style={styles.productDetailText}>Còn {quantity} sp</Text>
                </View>
            </View>
            <View style={styles.selectedProductContainer}>

                <View style={styles.presentSelectedQuantityProcess}>
                    <Text style={styles.presentQuantityText}>Đã chọn {amount} sản phẩm</Text>
                    <View style={styles.quanityAction}>
                        <Text onPress={() => onAmountChange(false)} style={styles.minusQuantity}>-</Text>
                        <Text style={styles.presentQuantity}>{amount}</Text>
                        <Text onPress={() => onAmountChange(true)} style={styles.plusQuantity}>+</Text>
                    </View>
                </View>

                <View style={styles.presentTotalPriceProcess}>
                    <Text style={styles.presentTotalPriceText}>Tạm tính</Text>
                    <Text style={styles.totalPrice}>{amount*price} VNĐ</Text>
                </View>
            </View>
            <View style={styles.buyButtonContainer}>
                <Pressable style={[styles.buyButton, amount>0? styles.buttonColor:null]}>
                    <Text style={styles.buyButtonText}>chọn mua</Text>
                </Pressable>
            </View>

        </>    
    )
}




const Detail = (props) => {
    const {navigation, route:{ params:{id} }  }= props;
    const [amount, setAmount] = useState(0);
    const {name, images, price, size, madein, quantity} = product; 


    return (
        <View style={styles.container}>
            <View style={styles.productNameContainer}>
                <Text styles={styles.productName}>{name}</Text>
            </View>

            <View style={styles.productImagesContainer}>
                <PagerView style={styles.productImagesPager}
                    initialPage={0} orientation='horizontal'>
                        {
                            images.map(img =>
                                <Image key={Math.random()} 
                                    source={{uri: img}}
                                    style={styles.productImage}
                                    resizeMode='cover'/>
                            )
                        }
                </PagerView>
            </View>
            <PartialView price={price} size={size} madein={madein} quantity={quantity}/>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    buyButtonContainer:{
        paddingHorizontal:24,
        height:50,
        borderRadius:5,
        marginTop:16,
    },
    buyButton:{
        backgroundColor:'#ABABAB',
        height:'100%',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
    },
    buyButtonText:{
        textAlign:'center',
        lineHeight:50,
        fontSize:16,
        color:'white',
        fontWeight:'500',
        textTransform:'uppercase'
    },
    buttonColor:{
        backgroundColor:'#007537',
    },


    presentSelectedQuantityProcess:{

    },
    presentQuantityText:{
        fontSize:14,
        opacity:0.6
    },
    quanityAction:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:5
    },
    minusQuantity:{
        borderRadius:5,
        borderWidth:0.5,
        textAlign:'center',
        width:27.5,
        height:27.5,
        lineHeight:27.5,
        fontSize:20,
        color:'black',

    },
    presentQuantity:{
        
    },
    plusQuantity:{
        borderRadius:5,
        borderWidth:0.5,
        textAlign:'center',
        width:27.5,
        height:27.5,
        lineHeight:27.5,
        fontSize:20,
        color:'black',
    },


    presentTotalPriceProcess:{

    },
    presentTotalPriceText:{
        color:'black',
        opacity:0.6,
        alignSelf:'flex-end'
    },
    totalPrice:{
        marginTop:4,
        textAlign:'right',
        fontSize:24,
        fontWeight:'500',
    },

    selectedProductContainer:{
        justifyContent: 'space-between',
        flex: 0.5,
        flexDirection:'row',
        paddingHorizontal:24
    },
    productDetailText:{
        fontSize:14,
        fontWeight:'500',
        color:'#3A3A3A',
    },
    productDetail:{
        borderBottomWidth: 0.5,
        borderBottomColor:'#221F1F',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
    },
    productDetailTitle:{
        fontSize:16,
        fontWeight:'500',
        color:'#3A3A3A',
        marginTop:15,
        borderBottomWidth: 1,
        borderBottomColor:'#221F1F',
    },
    productPrice:{
        fontSize:24,
        fontWeight:'500',
        color:'#007537',
    },
    productInforContainer:{
        paddingHorizontal: 48,
        paddingVertical:32,
    },
    productImage:{
        width:'100%',
        height:'100%',
    },
    productImagesPager:{
        flex: 1,
    },
    productImagesContainer:{
        width: '100%',
        height: 270,
        // paddingHorizontal:19
    },
    productNameContainer:{
        alignItems:'center',
        height: 55,
        justifyContent:'center',
    },
    productName:{
        fontSize:16,
        fontWeight:'500',

    },
    container:{
        flexGrow: 1,
        backgroundColor: 'white',
    },
})

var product = {
    "sold": 91,
    "images": [
        "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
        "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
    ],
    "_id": "61d12d14555401c8610cfa3b",
    "name": "Eucalyptus delegatensis R.T. Baker",
    "price": 2,
    "madein": "Indonesia",
    "quantity": 38017,
    "category": "61d11bf386511f0016f490c9",
    "size": "3XL",
    "createdAt": "2021-03-25T23:21:45.000Z",
    "updatedAt": "2021-10-07T08:02:19.000Z"
};
