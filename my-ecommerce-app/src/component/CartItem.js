import React, {useEffect, useState} from 'react';


const CartItem = (props) =>{

    const {name, image, price} = props.value;
    
    let [quantity, setQuantity] = useState(1)
    let [totalPrice, setTotalPrice] = useState(price);
    return(
        <div>
        <img src = {image} alt = "product" width = "200px" height = "200px"></img>
        <p>{name}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <button>Remove from Cart</button>
        </div>
    );

}

export default CartItem;