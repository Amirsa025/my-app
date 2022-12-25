import React from 'react';
import Image from 'next/image'
import {whyus} from "../../data/Home-page";
const WhyUs = () => {
    return (
        <section>
                <div className={"center container"}>
                    <h2 className={"text-solving md:text-[50px] lg:text-[70px] text-[22px]  font-bold"}>Why Us</h2>
                </div>
                <div className={"grid grid-cols-1 gap-y-2  md:grid-cols-3 pt-[40px] "}>
                    {
                        whyus.map((item, id)=>{
                                return (
                                    <div key={id.toString()}>
                                        <div   className="rounded-[32px] w-[150px] md:w-[224px] lg:w-[300px] xl:w-[350px] lg:h-[400px] h-[150px] md:h-[267px] px-4 mx-auto  bg-gl bg-why-section">
                                            <div   className = {'center lg:pt-[78px] md:pt-[40px] pt-[8px] '}>
                                                <Image src={item.icon} alt={item.title} className={"lg:flex hidden "} width={130} height={130}/>
                                                <Image src={item.icon} alt={item.title}  width={29} height={29} className={"flex md:hidden"}/>
                                                <Image src={item.icon}alt={item.title}  width={70} height={70} className={"hidden md:flex lg:hidden"}/>
                                            </div>
                                            <div className={"text-center py-4"}>
                                                <h2 className={"md:text-[24px] lg:text-[30px] text-[13px] font-bold"}>{item.title}</h2>
                                                <div className={"py-2"}>
                                                    <p className={"md:text-[16px] lg:text-[13px] text-[11px]"}>{item.subtitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                        })
                    }



                </div>
                <div className={"container py-8 "}>
                    <div className="grid grid-cols-1  md:grid-cols-3  justify-between px-[60px] bg-why-section rounded-[35px]">
                            <div className={"center"}>
                                <div>
                                     <span className={"text-[44px] md:text-[100px] lg:text-[150px] text-why"}>
                                    +30
                                </span>
                                </div>
                                <div className="flex flex-col pt-[5.5rem] text-[11px]md:text-[14px] lg:text-[16px]">
                                        <span className={"text-white"}>
                                    Satisfied
                                </span>
                                    <span className={"text-white"}>
                                    Partners
                                </span>
                                </div>
                            </div>
                        <div className={"flex items-center justify-center"}>
                                <span className={"text-[44px] md:text-[100px] lg:text-[150px] text-why"}>
                                    +30
                                </span>
                            <div className="flex flex-col pt-[5.5rem] text-[11px] md:text-[14px] lg:text-[16px]">
                                        <span className={"text-white "}>
                                  Successul

                                </span>
                                <span className={"text-white"}>
                                Projects
                                </span>
                            </div>
                        </div>
                        <div className={"flex items-center justify-center"}>
                                <span className={"text-[44px] md:text-[100px] lg:text-[150px] text-why"}>
                                    +20
                                </span>
                            <div className="flex flex-col pt-[5.5rem] text-[11px] md:text-[14px] lg:text-[16px]">
                                        <span className={"text-white"}>
                                   Team

                                </span>
                                <span className={"text-white"}>
                              Members
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default WhyUs;
