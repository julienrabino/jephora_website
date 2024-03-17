import React from 'react';
import {NavLink} from 'react-router-dom';
import Productpage from './Productpage';
const Header = () =>{

    return(
        <header>
            <div style = {{display:'flex'}}>
                <img src ="/images/logo.png" alt ="logo" height = "100px" width = "100px"/>
                <span style = {{marginLeft: 'auto'}}>Company Name</span>
            </div>
            <div style = {{display:'flex' , justifyContent:'space-between'}}>

                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/Productpage">Products</NavLink>
                
                <NavLink to = "/Login">Login</NavLink>
            </div>

        </header>

       
    );

};

export default Header;