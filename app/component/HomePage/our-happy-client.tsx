import React from 'react';
import OurHappyClientbg from '/public/image/our-happy-client-bgsvg.svg'
import Image from 'next/image'
import {happyClient} from "../../data/Home-page";

const OurHappyClient = () => {
    return (
        <section className="pt-[130px] lg:pt-[280px]  bg-cover bg-no-repeat "  style={{
            backgroundImage: `url(${OurHappyClientbg.src})`,
        }}
        >
            <div className = ''>
                <h1 className="text text-center text-solving md:text-[50px] lg:text-[70px] text-[22px]  font-bold">Our Happy clients</h1>
            </div>
            <div className="lg:w-full lg:h-[140px] background rounded-[35px] grid grid-cols-4 my-4 mx-4 px-[35px] py-4">
                {
                    happyClient.map((item)=>{
                        return(
                            <div key={item.id} className="flex items-center px-[25px] md:">
                                <Image src={item.src} alt={"aaa"}/>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default OurHappyClient;
