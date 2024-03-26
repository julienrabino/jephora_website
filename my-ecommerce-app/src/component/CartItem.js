import React, {useEffect, useState} from 'react';
import cart from "../data/cart";


const CartItem = (props) =>{
    let [tempCart, setCart] = useState(cart);
    const {name, image, price} = props.value;

    let [test, setTest] = useState("test");

    let [quantity, setQuantity] = useState(1)
    let [totalPrice, setTotalPrice] = useState(price);

    function removeFromCart(){
        // setTest("here");
        tempCart.forEach((item,index) => {
            if (item.name === name){
                if (item.quantity === 1){
                    const temp = tempCart.filter((item) => item.name !== name)
                    setCart(temp)
                } else {
                    item.quantity = item.quantity - 1;
                }
            }
        });
    }
    return(
        <div>
        <img src = {image} alt = "product" width = "200px" height = "200px"></img>
        <p>{name}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <button onClick={removeFromCart(name)}>Remove from Cart</button>
        </div>
    );

}

export default CartItem;