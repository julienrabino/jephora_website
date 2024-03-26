import React, {useState} from 'react';
import cart from "../data/cart";
import CartItem from './CartItem';

const Cart = (props) =>{
    const displayCart = cart.map((item) => (
        <CartItem value = {item}/>
    ));
    
    let totalCartCost = 0;
    cart.forEach((item, index) => {
        totalCartCost = totalCartCost + item.price;
    }

    )
    return(
        <td>
            {displayCart}
            <p>Total in cart: ${totalCartCost} </p>
        </td>
    )
}

export default Cart;