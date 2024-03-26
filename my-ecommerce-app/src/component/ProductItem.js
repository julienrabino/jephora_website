import React, {useEffect, useState} from 'react';
import Cart from './Cart';
import cart from "../data/cart";


const ProductItem = (props) =>{
    const [hovered, setHovered] = useState(false);

    const {name, description, image, price} = props.value; 
    function productHovered(){
        setHovered(true);
    }

    function productNotHovered(){
        setHovered(false);
    }
    
    function addProductToCart(){
    //     return <Cart name = "test"/>;
    // }
    // useEffect((

    // ),[])
    }
    return(
        <div onMouseEnter = {productHovered} onMouseLeave = {productNotHovered}>
        <img src = {image} alt = "product" width = "200px" height = "200px"></img>
        <p>{name}</p>
        <p>Price: ${price}</p>
        <button onClick={addProductToCart}>Add to Cart</button>
        {hovered ? (<p>{description}</p>): null}

    
        </div>
    );
}

export default ProductItem;