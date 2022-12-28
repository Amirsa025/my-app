import React from 'react';

import  Topographic5 from '/public/image/Topographic5.png'
import BigStep from "../../component/HomePage/big-step";
import Slaving from "../../component/HomePage/sloving-programming";
import WhyUs from "../../component/HomePage/why-us";
import OurLastProject from "../../component/HomePage/our-last-project";
import OurHappyClient from "../../component/HomePage/our-happy-client";
import ScheduleCall from "../../component/HomePage/ScheduleCall";
const HomeLayout = () => {
    return (
        <div>
            <div className=" container-layout height">
                <BigStep/>

                <Slaving/>
                <div style={{
                    backgroundImage: `url(${Topographic5.src})`,
                }} className={"bg-contain w-full h-full "}>

                    <WhyUs/>

                    <OurLastProject/>
                </div>

                <OurHappyClient/>

                <ScheduleCall/>

            </div>
        </div>
    );
};

export default HomeLayout;
