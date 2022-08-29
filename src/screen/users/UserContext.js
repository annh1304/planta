import React, { useState, createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, register } from './UserService';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const { children } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onLogin = async (email, password) => {
        try {
            const res = await login(email, password);
            if (res.error == false) {
                const token = res.data.token;
                // const { token, user } = res.data;
                await AsyncStorage.setItem('token', token);
                // await AsyncStorage.setItem('user', JSON.stringify(user));
                setIsLoggedIn(true);
                return true;
            }
        } catch (error) {
            console.log('onLogin error: ', error)
        }
        await AsyncStorage.removeItem('token');
        setIsLoggedIn(false);
        return false;
    }

    const onRegister = async (email, password) =>{
        try {
            const res = await register(email, password);
            if (res.error == false) {
                // const token = res.data.token;
                // // const { token, user } = res.data;
                // await AsyncStorage.setItem('token', token);
                // // await AsyncStorage.setItem('user', JSON.stringify(user));
                // setIsLoggedIn(true);
                return true;
            }
        } catch (error) {
            console.log('onRegister error' , error);
        }
        return false;
    }

    return (
        <UserContext.Provider
            value={{
                // isLoggedIn: isLoggedIn,
                // onLogin
                isLoggedIn,
                onLogin, onRegister
            }}>
            {children}
        </UserContext.Provider>
    );
}


