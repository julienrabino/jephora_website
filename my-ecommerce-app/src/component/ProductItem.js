import React, {useState} from 'react';

const ProductItem = (props) =>{
    const [hovered, setHovered] = useState(false);

    const {name, description, image, price} = props.value; 
    function productHovered(){
        setHovered(true);
    }

    function productNotHovered(){
        setHovered(false);
    }
    return(
        <div>
        <img src = {image} alt = "product" width = "200px" height = "200px"></img>
        <p onMouseEnter = {productHovered} onMouseLeave = {productNotHovered}>{name}</p>
        <p>Price: ${price}</p>
        <button>Add to Cart</button>
        {hovered ? (<p>{description}</p>): null}

    
        </div>
    );
}

export default ProductItem;