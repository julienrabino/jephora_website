import React, {useState} from 'react';
import cart from "../data/cart";
import CartItem from './CartItem';

const Cart = (props) =>{
    const displayCart = cart.map((item) => (
        <CartItem value = {item}/>
    ));
    
    const totalCartCost = 0;
    // for (const item of cart){
    //     totalCartCost = totalCartCost + item.
    // }
    return(
        <td>
            {displayCart}
            <p>Total in cart: ${totalCartCost} </p>
        </td>
    )
}

export default Cart;