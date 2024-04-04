import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LoginForm = () =>{
    return(
        <div class="login-form">
            <form action="#" method = "post">
                <label for="username">Username:</label>
                <input type="text" id = "username" name = "username" required placeholder="Enter a username"/><br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required placeholder="Enter your password"/><br/>
                
                <label for="checkPassword">Confirm Password:</label>
                <input type="password" id="checkPassword" name="checkPassword" required placeholder="Reenter your password"/><br/>

                <label for="email">Email:</label>
                <input type="text" id="email" name="email" required placeholder="Enter your email"/><br/>
                
                <button type="submit" class = "login-btn">Signup</button>
                <button type="submit" class = "login-btn">Signup</button>

            </form>
        </div>
    );
}

export default LoginForm;