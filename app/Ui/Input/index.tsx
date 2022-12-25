import React from 'react';
import {ErrorMessage, Field} from "formik";
interface InputProps {
    label?:string,
    inputValue ?:string,
    type ? : string,
    placeholder ? : string,
    InputName:string,
    inputClassName?:string,
    labelClassName?:string
}
const Input:React.FC<InputProps> = ({label,type,placeholder,InputName,inputClassName,labelClassName}) => {
    return (
        <>
           <div className="flex flex-col pb-[20px] font-roberto">
               <label className={`${labelClassName} pb-[10px] text-[#F3F3F3] font-normal text-[12px] `}>{label}</label>
               <Field type={type} placeholder={placeholder} name={InputName} className={`${inputClassName} bg-[#18191D] text-[#929294] px-4 h-[40px] rounded-[0.5rem] border focus:outline-0      border-[#555658]` } ></Field>
               <ErrorMessage name={InputName}  className= {`text-danger-400 ${inputClassName??''}`} />
           </div>
        </>
    );
};

export default Input
