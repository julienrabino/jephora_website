import React from 'react';
import Header from './Header';
import ProductItem from './ProductItem';
import product from '../data/products';


const Productpage = () =>{
    return(
        <div>

            <Header />

            an example on how to use productItem component
            {/* <ProductItem value = {product[1]} /> */}


        </div>
    );
}

export default Productpage;