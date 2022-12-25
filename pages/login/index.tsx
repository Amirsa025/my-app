import React from 'react';
import Navbar from "../../app/component/Header/Navbar";
import LoginLayout from "../../app/Layout/Login";

const Login = () => {
    return (
        <div className="container-main">
            <Navbar/>
                <LoginLayout/>
        </div>
    );
};

export default Login;
