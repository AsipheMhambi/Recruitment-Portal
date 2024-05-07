// SignIn.js
import React from 'react';

const SignIn = () => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <a href="#">Sign-Up</a></p>
        </div>
    );
};

export default SignIn;
