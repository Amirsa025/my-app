import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import google from "/public/image/Google__G__Logo 1.png"
import Image from 'next/image'
import Input from "../Input";
import LoginForm from "../../component/Forms/Login/LoginForm";

export default function ModalSignup() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="">
                <button className="text-nav  font-normal  text-[14px] center " onClick={openModal}>
                    <span className="login-text">Sign Up </span>
                </button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[1000000000011111]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-backdrops backdrop-filter  bg-opacity-[0.7]"
                             aria-hidden="true"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="md:w-[26.25rem] w-[20.438rem]   transform  rounded-2xl background  border text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="lg:px-[40px]"
                                    >
                                        <div className="text-center md:text-left ">
                                            <span
                                                className="text lg:text-[70px] md:text-[50px] text-[24px] font-bold">Sign Up</span>
                                        </div>
                                    </Dialog.Title>
                                    <Dialog.Panel   className="lg:px-[40px] px-[1rem] pt-[1rem]">
                                        <div className="">
                                            <p className="text-primery text-[12px] md:text-[14px]">for creating your project please SignUp to your account</p>
                                        </div>
                                        <div className=" pt-[4rem] pb-[27px]">
                                            {/*        Link to login page */}
                                                    <button className="bg-white md:w-[20.25rem] w-[18.75rem] h-[2.25rem] rounded-[10px] center gap-4 font-bold text-[14px] ">
                                                        <Image src={google} alt="google" width={24} height={24} />
                                                        Continue with Google
                                                    </button>

                                                </div>
                                        <div className={"flex items-center pb-[30px]"}>
                                            <div className={"border-b pb-[1px] border-white w-[50%] "}></div>
                                            <div className={"w-[40px] h-[30px] text-center text-[14px] text-white text-roberto" +
                                                ""}>
                                                        Or
                                            </div>
                                            <div className={"border-b pb-[1px] border-white w-[50%] "}></div>
                                        </div>
                                        <div>
                                           <LoginForm/>
                                        </div>
                                    </Dialog.Panel>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
