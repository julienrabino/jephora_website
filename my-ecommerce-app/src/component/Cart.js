import React, {useState} from 'react';
// import cart from "../data/cart";
import CartItem from './CartItem';

const Cart = (props) =>{
    if (props.value.length === 0){
        return <p> No items in cart</p>;
    }
    const displayCart = props.value.map((item) => (
        <CartItem value = {item}/>
    ));
    
    let totalCartCost = 0;
    props.value.forEach((item, index) => {
        totalCartCost = totalCartCost + item.price
    }

    )
    return(
        <td>
            {displayCart}
            <p>Total in cart: ${totalCartCost.toFixed(2)} </p>
        </td>
    )
}

export default Cart;