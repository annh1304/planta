import React, { useState, createContext } from 'react';

import { getProductForHomePage, getProductDetail, saveCart, search } from './ProductService';

export const ProductContext = createContext();
export const ProductContextProvider = (props) => {
    const { children } = props;
    const [cart, setCart] = useState([]);
    const onGetProductForHomePage = async () => {
        try {
            const res = await getProductForHomePage();
            if (res.error == false) {
                return res.data;
            }
        } catch (error) {
            console.log('onGetProductForHome error:', error);
        }
        return [];
    }
    const onGetProductDetail = async (id) => {
        try {
            const res = await getProductDetail(id);
            if (res.error == false) {
                return res.data;
            }
        } catch (error) {
            console.log('onGetProductDetail error:', error)
        }
        return null;
    }

    const updateCart = (product, quantity, price, checked = true) => {
        let temp = cart;
        if (cart.length == 0) {
            temp.push({ product: product, quantity: quantity, price: price, checked: checked });
        } else {
            const check = cart.filter(item => item.product._id == product._id);

            if (check.length == 0) {
                //Không có sản phẩm trong giỏ hàng
                temp.push({ product: product, quantity: quantity, price: price, checked: checked });
            } else {
                //Có sản phẩm
                temp.map(item => {
                    if (item.product._id == product._id) {
                        item.quantity = quantity;
                    }
                    return item;
                })
            }
        }
        setCart([...temp]);
    }


    // const getCart = () => cart;
    // const clearCart = () => setCart([]);
    // const setCart = () => setCart([]);
    const onSaveCart = async () => {
        try {
            let total = 0;
            let products = [];
            for (let index = 0; index < cart.length; index++) {
                const element = cart[index];
                total += element.quantity * element.price;
                products.push({
                    product: element.product._id,
                    price: element.price,
                    quantity: element.quantity
                })
            }
            await saveCart({ total, products });
            setCart([...[]]);
        } catch (error) {
            console.log('onSaveCart error: ', error);
        }
    }
    const onSearch = async (keyword) => {
        try {
            const res = await search(keyword);
            if (res.error == false) {
                return res.data;
            }
        } catch (error) {
            console.log('onSearch error:', error);
        }
        return [];
    }
    return (
        <ProductContext.Provider
            value={{
                cart, onSaveCart, onSearch,
                onGetProductForHomePage, onGetProductDetail, updateCart, setCart
            }}>
            {children}
        </ProductContext.Provider>
    );
};