import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const Productpage = () => {
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
        var productFound = false;
        cart.forEach((item, index) => {
            if (item.name === product.name) {
                const newCart = [...cart];
                newCart[index].quantity += 1;
                setCart(newCart);
                productFound = true;
            }
        });

        if (!productFound) {
            product.quantity = 1;
            const newCart = [...cart, product];
            setCart(newCart);
        }
    };

    const removeFromCart = (product) => {
        cart.forEach((item, index) => {
            if (item.name === product.name) {
                const newCart = [...cart];
                newCart[index].quantity -= 1;
                if (newCart[index].quantity === 0) {
                    newCart.splice(index, 1);
                }
                setCart(newCart);
            }
        });
    };

    return (
        <div className="product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList addToCart={addToCart} /></td>
                    <td style={{ verticalAlign: 'top', right: 100 }}><h1>Shopping Cart</h1><Cart value={cart} removeFromCart ={removeFromCart}/></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
}

export default Productpage;
