import React from 'react';
import Image from 'next/image'
import card1 from '/public/image/card-1.png'
import 'remixicon/fonts/remixicon.css'
const OurLastProject:React.FC = () => {
    return (
        <section>
           <div className="">
               <h2 className={"text-solving md:text-[50px] lg:text-[70px] text-[22px] text-center  font-bold"}>
                   Our Latest Projects
               </h2>
           </div>
            <div className={" pt-[40px] grid grid-col-12 justify-center md:grid-cols-3 "}>
                <div className={"w-[20.5rem] h-[24.188rem] md:w-[13.75rem] md:h-[19.25rem] lg:w-[16.313rem] xl:w-[24.313rem] lg:h-[28.75rem] background my-5 rounded-2xl"}>
                        <div className={"text-center"}>
                            <Image src={card1}  className="lg:flex hidden mx-auto py-2" alt="string"/>
                            <Image src={card1} className="md:flex hidden lg:hidden mx-auto py-2" width="204" height="177" alt="string"/>
                            <Image src={card1} className="flex md:hidden mx-auto py-2" width="300" height="276" alt="string"/>
                        </div>
                        <div className={"px-6 py-2"}>
                            <h3>Product design</h3>
                            <div className={"flex items-center justify-between py-[0.75rem]"}>
                                <div>Car rental project</div>
                                <div>
                                    <i className="ri-arrow-right-s-line text text-[30px]"></i>
                                </div>
                            </div>
                        </div>
                </div>
                <div className={"w-[20.5rem] h-[24.188rem] md:w-[13.75rem] md:h-[19.25rem]  lg:w-[16.313rem] xl:w-[24.313rem] lg:h-[28.75rem] background my-5 rounded-2xl"}>
                    <div className={"text-center"}>
                        <Image src={card1}  className="lg:flex hidden mx-auto py-2" alt="string"/>
                        <Image src={card1} className="md:flex hidden lg:hidden mx-auto py-2" width="204" height="177" alt="string"/>
                        <Image src={card1} className="flex md:hidden mx-auto py-2" width="300" height="276" alt="string"/>
                    </div>
                    <div className={"px-6 py-2"}>
                        <h3>Product design</h3>
                        <div className={"flex items-center justify-between py-[0.75rem]"}>
                            <div>Car rental project</div>
                            <div>
                                <i className="ri-arrow-right-s-line text text-[30px]"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-[20.5rem] h-[24.188rem] md:w-[13.75rem] md:h-[19.25rem]  lg:w-[16.313rem] xl:w-[24.313rem] lg:h-[28.75rem] background my-5 rounded-2xl"}>
                    <div className={"text-center"}>
                        <Image src={card1}  className="lg:flex hidden mx-auto py-2" alt="string"/>
                        <Image src={card1} className="md:flex hidden lg:hidden mx-auto py-2" width="204" height="177" alt="string"/>
                        <Image src={card1} className="flex md:hidden mx-auto py-2" width="300" height="276" alt="string"/>
                    </div>
                    <div className={"px-6 py-2"}>
                        <h3>Product design</h3>
                        <div className={"flex items-center justify-between py-[0.75rem]"}>
                            <div>Car rental project</div>
                            <div>
                                <i className="ri-arrow-right-s-line text text-[30px]"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurLastProject
