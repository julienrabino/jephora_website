import React, {useEffect, useState} from 'react';
import cart from "../data/cart";


const CartItem = (props) =>{

    const {name, image, price, quantity} = props.value;

    
    
    return(
        <div>
        <img src = {image} alt = "product" width = "200px" height = "200px"></img>
        <p>{name}</p>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ${price*quantity.toFixed(2)}</p>
        {/* <button onClick={removeFromCart(name)}>Remove from Cart</button> */}
        </div>
    );

}

export default CartItem;