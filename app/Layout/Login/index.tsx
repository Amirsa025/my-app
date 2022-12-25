import React from 'react';
import google from "/public/image/Google__G__Logo 1.png"
import Image from 'next/image'
import ModalSignup from "../../Ui/modal/Modal-signUp";
import LoginForm from "../../component/Forms/Login/LoginForm";
const LoginLayout = () => {
    return (
        <div className=" lg:px-[120px] px-4 md:px-[112px]   w-full pb-[5rem] pt-[60px]">
                <div className="bg-backdrops rounded-[20px] flex lg:flex-row flex-col">
                    <div className="px-2 lg:w-1/3 pt-5  pb-[5rem] lg:px-[52px]">
                      {/*  title*/}
                      <div className="text lg:text-[70px] md:text-[50px] text-[22px] font-bold center">
                          <h2  className={"login-text"}>Login</h2>
                      </div>
                        {/*link to modal*/}
                        <div>
                            <div className="center">
                                <p className="text-primery text-[12px] md:text-[14px] pr-[12px]">Don’t have an account? </p>
                                <ModalSignup/>
                            </div>
                        </div>
                    {/*    button*/}
                        <div className=" pt-[2rem] pb-[27px] center">
                            {/*        Link to login page */}
                            <button className="bg-white md:w-[20.25rem] w-[18.75rem] h-[2.25rem] rounded-[10px] text-black center gap-4 font-bold text-[14px] ">
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
                    </div>
                    <div className=" center mx-auto">
                        <div className={""}>
                            <Image
                                src="/image/star 3.png"
                                className="rotate flex lg:hidden"
                                alt="star"
                                width={300}
                                height = {
                                    300
                                }
                            />
                            <Image
                                src="/image/star 3.png"
                                className="rotate hidden lg:flex"
                                alt="star"
                                width={563.53}
                                height = {
                                    563.53
                                }
                            />
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default LoginLayout;
