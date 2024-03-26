import React from "react";
import ProductItem from "./ProductItem";
import product from "../data/products";

const ProductList = ({addToCart}) => {
    
    const displayProduct = product.map((item) => (
        <ProductItem value = {item} addToCart = {addToCart}/>
    ));
    
    return(
        <td>
            {displayProduct}
        </td>
    )
}
export default ProductList;