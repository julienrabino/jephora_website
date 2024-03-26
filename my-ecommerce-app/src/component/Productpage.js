import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';



const Productpage = () =>{
    return(
        <div className="product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList /></td>
                    <td style={{verticalAlign:'top', right:100}}><h1>Shopping Cart</h1><Cart/></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
}

export default Productpage;