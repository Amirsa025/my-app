import React from 'react';
import Button from "../../Ui/button";
import Image from 'next/image'
const BigStep = () => {
    return (
        <section className= "container py-[5rem] relative">
            <div className={"grid grid-col-12 lg:grid-cols-2 bg-gl  mx-auto w-[300px] md:w-[450px]  lg:w-full border border-[#242529] rounded-[30px]"}  style={{
                background: `linear-gradient(154.51deg, rgba(255, 255, 255, 0.1) 6.2%, rgba(255, 255, 255, 0) 94.47%), linear-gradient(0deg, rgba(12, 5, 33, 0.3), rgba(12, 5, 33, 0.3))`,
            }}>
                <div className = "flex flex-col  md:px-8">
                    <h1 className=" font-bold text-[4rem] text-big-step text-[48px] md:text-[64px] lg:text-[80px] text-center md:text-center lg:text-left">
                        <div>
                            <span>Your Next </span>
                        </div>
                        <div>
                            <span>Big Step</span>
                        </div>
                    </h1>
                    <div className = " py-[2.75rem] center lg:justify-items-start lg:items-start flex-col">
                        <div>
                            <span className=" font-bold text-[0.75rem]">Design <span className=" font-normal">to</span> Develop</span>
                        </div>
                        <div className = "py-4  ">
                            <Button btnClassName = "shadowForBig">Get Started</Button>
                        </div>
                    </div>
                </div>
                <div className={"relative top-[3.75rem] lg:absolute md:right-0 md:top-50 lg:-top-[1.25rem]"}>
                    <Image
                        src="/image/star 3.png"
                        className="rotate "
                        alt="star"
                        width={460}
                        height = {
                       460
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default BigStep;
