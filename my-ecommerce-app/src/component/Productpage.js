import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductItem from './ProductItem';
import product from '../data/products';
import Cart from './Cart';
import Footer from './Footer';



const Productpage = () =>{
    return(
        // <div>

        //     <Header />
        //     an example on how to use productItem component
        //     {/* <ProductItem value = {product[1]} /> */}
        //     <Footer />


        // </div>

        <div className="product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList /></td>
                    <td style={{verticalAlign:'top', right:100}}>Cart</td>
                </tr>
            </table>
            <Footer />
        </div>
    );
}

export default Productpage;