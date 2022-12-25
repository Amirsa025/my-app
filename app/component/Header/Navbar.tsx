import { useEffect, useRef, useState } from 'react'
import ModalLogin from "../../Ui/modal/Modal-login";
import {navBar_Item} from "../../data/nav-bar";
import Link from "next/link";
import Button from "../../Ui/button";
import ModalSignup from "../../Ui/modal/Modal-signUp";




 const Navbar = () => {

    const [state, setState] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    const navRef = useRef<HTMLInputElement | null>(null);
     const navRefElement = navRef.current;
    useEffect(() => {

        const body = document.body

        // Disable scrolling
        const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
        if (state) body.classList.add(...customBodyStyle)
        // Enable scrolling
        else body.classList.remove(...customBodyStyle)

        // Sticky strick
        const customStyle = ["sticky-nav", "fixed", "bg-[#0C0D11]",]
        window.onscroll = () => {
            if (window.scrollY > 80) navRefElement?.classList.add(...customStyle)
            else navRefElement?.classList.remove(...customStyle)
        }
    }, [state])


    return (
        <nav ref={navRef} className="w-full top-0 z-20 ">
            <div className="items-center lg:flex " >
                <div className="flex px-4  items-center justify-between py-3 lg:py-4 lg:block reletive " >
                    <a href="#"  className="lg:hidden ">
                        <span className="sr-only">Your Company</span>
                        <span  className="font-bold text-[1.4rem]">AtrinTech</span>
                    </a>
                    <div className="lg:hidden ">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-none focus:border"
                                onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className="flex w-full px-4 items-center justify-between py-6 flex-row-reverse xl:px-[6.25rem]" >
                    <div className="flex items-center">
                        <ul className="lg:flex hidden px-8 items-center   lg:flex-row-reverse flex-col  px-[100px]">
                            <div className="px-1">
                                <ModalSignup/>
                            </div>
                            /
                            <div className="px-2"> <ModalLogin/></div>
                            {
                                navBar_Item.map((item,id)=>{
                                    return (
                                        <li className={"px-4"} key={item.id }>
                                            <Link className="text-nav  font-normal  text-[13px] " href={'#'}>{item.nav}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className={"hidden lg:flex"}>
                            <Button>Get a Start</Button>
                        </div>
                    </div>
                        <div  className={"hidden lg:flex"}>
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <span  className="font-bold text-[1.4rem]">AtrinTech</span>
                            </a>
                        </div>
                </div>
                <div className={`absolute  top-0 w-full z-50 justify-between transition-all ease-out duration-500 flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${ state ? 'bg-nav flex flex-col lg:hidden shadow-lg bg-gl pb-20 overflow-auto pr-4' : 'hidden'}`} >

                    <div className="">
                        <div className="flex justify-between px-4 py-4 lg:hidden flex">
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <span  className="font-bold text-[1.4rem]">AtrinTech</span>
                            </a>
                            <div className="lg:hidden">
                                <button className="text-gray-700 outline-none p-2 rounded-md "
                                        onClick={() => setState(!state)}
                                >
                                    {
                                        state ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                            </svg>
                                        )
                                    }
                                </button>
                            </div>
                        </div>
                        <nav className="grid gap-y-8">
                            <ul className="flex lg:hidden pt-6 gap-y-6  items-center   lg:flex-row-reverse flex-col  ">
                                    <div className="flex  justify-between px-4">

                                        <div className="px-4">
                                            <ModalSignup/>
                                        </div>
                                        /
                                        <div className="px-4"> <ModalLogin/></div>
                                    </div>
                                {
                                    navBar_Item.map((item,id)=>{
                                        return (
                                            <li className={"px-4"} key={item.id }>
                                                <Link className="text-nav  font-normal  text-[13px] " href={'#'}>{item.nav}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className={" lg:hidden center"}>
                                <Button>Get a Start</Button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
