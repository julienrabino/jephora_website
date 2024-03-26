import React, {useEffect, useState} from 'react';
import Cart from './Cart';
// import {getCart, addProductToCart} from "../data/cart";
import cart from "../data/cart";
import CartItem from './CartItem';


const ProductItem = (props) =>{
    const [hovered, setHovered] = useState(false);

    const {name, description, image, price} = props.value; 
    function productHovered(){
        setHovered(true);
    }

    function productNotHovered(){
        setHovered(false);
    }   

    function addProduct(){
        for (const item in cart){
            if (item.name === name){
                item = CartItem
            }
        };
    };
    
    return(
        <div onMouseEnter = {productHovered} onMouseLeave = {productNotHovered}>
        <img src = {image} alt = "product" width = "200px" height = "200px"></img>
        <p>{name}</p>
        <p>Price: ${price}</p>
        <button onClick={addProduct}>Add to Cart</button>
        {hovered ? (<p>{description}</p>): null}

    
        </div>
    );
}

export default ProductItem;