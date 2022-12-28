import React from 'react';
import {NextPage} from "next";
import Footer from "../../app/component/footer";
import Navbar from "../../app/component/Header/Navbar";
import HomeLayout from "../../app/Layout/HomePage";

const HomePage:NextPage = () => {
    return (
        <div className="container-main">
            <Navbar/>
            <HomeLayout/>
            <Footer/>
        </div>


    );
};

export default HomePage;
