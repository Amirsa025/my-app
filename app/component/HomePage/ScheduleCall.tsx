import React from 'react';
import Image from 'next/image'
import TypingAmico from 'public/image/Typing-amico.png'
import Button from "../../Ui/button";
const ScheduleCall: React.FC = () => {
    return (
        <section className="py-[150px]">
                <div className="center">
                    <Image src={TypingAmico} width={596}  className={"hidden lg:flex"} alt="TypingAmico"/>
                    <Image src={TypingAmico}  width={346} className={"hidden md:flex lg:hidden"} alt="TypingAmico"/>
                    <Image src={TypingAmico}  width={207} className="md:hidden flex" alt="TypingAmico"/>
                </div>
            <div className={"center pt-4"}>
                <h3 className={"text text-center text-solving md:text-[50px] lg:text-[70px] text-[22px]  font-bold"}>Let’s Get Into The Business</h3>
            </div>
            <div className={"center pt-[2.5rem]"}>
                <p className={"font-normal md:text-[1.1rem] text-[0.75rem] "}>To fill the blind spots and talk about the project detail let’s have a free talk</p>
            </div>
            <div className={"center gap-6 pt-4"}>
                <Button >  Schedule a Call</Button>
                <Button btnClassName={" btn-outline-start"}>  Schedule a Call</Button>
            </div>
        </section>

    );
};

export default ScheduleCall;
