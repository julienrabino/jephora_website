import React from "react";
import ProductItem from "./ProductItem";
import product from "../data/products";

const ProductList = () => {
    
    const displayProduct = product.map((item) => (
        <ProductItem value = {item}/>
    ));
    
    return(
        <td>
            {displayProduct}
        </td>
    )
}
export default ProductList;