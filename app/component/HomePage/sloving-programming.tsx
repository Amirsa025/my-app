import React from 'react';
import Image from 'next/image'
import Starting from '/public/image/Starting a business project-rafiki.png'
import Starting1 from '/public/image/Business deal-amico.png'
import Starting2 from '/public/image/vector.png'
const Slaving: React.FC = () => {
    return (
        <section className="container pt-[186px] flex flex-col ">
            <h1 className={"center  text-solving font-bold lg:text-[4.375rem] md:text-[3.125rem] text-[22px]"}>We Solve Your Probelms</h1>
            <div className="pt-[80px] flex lg:flex-row-reverse flex-col-reverse justify-between">
                <div className="flex items-center justify-center">
                    <div  className="text-section-image">
                        <Image src={Starting}  className="lg:flex hidden" alt="string"/>
                        <Image src={Starting} className="md:flex hidden lg:hidden" width="300" height="300" alt="string"/>
                        <Image src={Starting} className="flex md:hidden" width="220" height="220" alt="string"/>
                    </div>
                </div>
                <div className="pr-[160px]  flex flex-col justify-center">
                    <div className="flex items-center gap-4 ">
                        <div className="w-[0.5rem] h-[0.5rem] rounded-full bolt"></div>
                        <h2 className={"font-bold text-[#F3F3F3]"}>Helping StartUps</h2>
                    </div>
                    <p className="text-primery text-[1rem] pl-[1.3rem]">We are with you from the spark of the first<br/>
                        idea to the Publishig a Great Product.</p>
                </div>
            </div>
            <div className="pt-[80px] flex lg:flex-row-reverse flex-col justify-between">
                <div className="flex items-center ">
                    <div className="pr-[160px]">
                        <div className="flex items-center gap-4 ">
                            <div className="w-[0.5rem] h-[0.5rem] rounded-full bolt"></div>
                            <h2 className={"font-bold text-[#F3F3F3]"}>Partnership with
                                Enterprises</h2>
                        </div>
                        <p className="text-primery text-[1rem] pl-[1.3rem]">No matter how big is the problem</p>
                    </div>

                </div>
                <div  className="text-section-image">
                    <Image src={Starting1}  className="lg:flex hidden" alt="string"/>
                    <Image src={Starting1} className="md:flex hidden lg:hidden" width="300" height="300" alt="string"/>
                    <Image src={Starting1} className="flex md:hidden" width="220" height="220" alt="string"/>
                </div>
            </div>
            <div className="pt-[80px] flex lg:flex-row-reverse  flex-col-reverse justify-between">
                <div className="flex items-center justify-center">
                    <div  className="text-section-image">
                        <Image src={Starting2}  className="lg:flex hidden" alt="string"/>
                        <Image src={Starting2} className="md:flex hidden lg:hidden" width="300" height="300" alt="string"/>
                        <Image src={Starting2} className="flex md:hidden" width="220" height="220" alt="string"/>
                    </div>
                </div>
                <div className="pr-[160px] flex flex-col justify-center">
                    <div className="flex items-center gap-4 ">
                        <div className="w-[0.5rem] h-[0.5rem] rounded-full bolt"></div>
                        <h2 className={"font-bold text-[#F3F3F3]"}>Small Businesses</h2>
                    </div>
                    <p className="text-primery text-[1rem] pl-[1.3rem]">We are with you from the spark of the first <br className={"lg:flex sr-only"}/> idea to the Publishig a Great Product.</p>
                </div>
            </div>
        </section>
    );
};

export default Slaving
