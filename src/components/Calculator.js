import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, Pressable } from 'react-native'

const Calculator = (props) => {

    const [numberOne, setNumberOne] = useState(1);
    const [numberTwo, setNumberTwo] = useState(2);
    const [result, setResult] = useState(3);
    const [point, setPoint] = useState(0);
    // const [answer, setAnswer] = useState(true);
    const [answer, setAnswer] = useState(true);

    const onPressResult = (chosen) =>{

        if(answer == chosen){
            setPoint(point+1);
        }else{
            if(point==0){
                setPoint(0);
            }else{
                setPoint(point-1);
            }
        }
        
        onPressRefresh();
        
    }

    const onPressRefresh = () =>{
        const random = Math.round(Math.random()*1);

        if(random == 1){
        const num1 = Math.round(Math.random()*10);
        const num2 = Math.round(Math.random()*10);
        const res = num1 + num2;

        setNumberOne(num1); setNumberTwo(num2); setResult(res);
        setAnswer(true);

        }else{
            const num1False = Math.round(Math.random()*10);
            const num2False = Math.round(Math.random()*10);
            const deviant = Math.round(Math.random()*5);
            const resFalse = num1False + num2False + deviant;

            setNumberOne(num1False); setNumberTwo(num2False); setResult(resFalse);
            setAnswer(false);
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.pointContainer}>
                <Text style={styles.pointText}>{point}</Text>
            </View>

            <View style = {styles.additionContainer}>
                <Text style = {styles.additionText}>{numberOne}+{numberTwo}</Text>
            </View>

            <View style = {styles.resultContainer}>
                <Text style = {styles.resultText}>=</Text>
            </View>

            <View style = {styles.resultContainer}>
                <Text style = {styles.resultText}>{result}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Pressable style={styles.buttonTrue} onPress= {() => onPressResult(true)}>
                    <Text style = {styles.buttonTextTrue}>Đúng</Text>
                </Pressable>
                <Pressable style ={styles.buttonFalse} onPress={() => onPressResult(false)}>
                    <Text style={styles.buttonTextFalse}>Sai</Text>
                </Pressable>
            </View>

            {/* <Button onPress={ () => onPressResult(true)} title='dung'/>
            <Button onPress={ () => onPressResult(false)} title='sai'/> */}

            
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    buttonTextTrue:{
        fontSize: 30,
        fontWeight:'600',
        color: '#FF0000'
    },
    buttonTextFalse:{
        fontSize: 30,
        fontWeight:'600',
        color: '#195AFF'
    },
    buttonTrue:{
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonFalse:{
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding :60
    },
    resultContainer:{
        flexDirection:"row",
        justifyContent: "center"
    },
    resultText:{
        color:'white',
        fontWeight:'600',
        fontSize: 80,
    },
    additionText:{
        color:'white',
        fontWeight:'600',
        fontSize: 80,
    },
    additionContainer:{
        flexDirection: 'row',
        justifyContent:  'center',
    },
    pointText:{
        color:'white',
        fontWeight:'600',
        fontSize: 62,
    },
    container:{
        backgroundColor:'#4779FE',
        padding: 15,
        width:'100%',
        height:'100%',
    },
    pointContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})
