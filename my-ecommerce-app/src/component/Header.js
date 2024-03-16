import React from 'react';
import {NavLink} from 'react-router-dom';
// import Productpage from './Productpage';
const Header = () =>{

    return(
        <header>
            <div style = {{display:'flex'}}>
                <img src ="/images/logo.png" alt ="logo" height = "100px" width = "100px"/>
                <span style = {{marginLeft: 'auto'}}>Company Name</span>
            </div>
            <div>

                <NavLink to = "/Homepage">Home</NavLink>
            </div>

        </header>

       
    );

};

export default Header;