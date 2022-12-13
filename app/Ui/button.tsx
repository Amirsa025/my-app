import React from 'react';
interface  button {
    children?:string,
    btnClassName?:string
}
const Button:React.FC<button> = ({children,btnClassName}) => {
    return (
        <button
            className={`w-[142px] h-[40px] button-gradient rounded-md center  whitespace-nowrap text-white shadow-sm hover:bg-indigo-700 border-gray-200 ${btnClassName}`}>
            {children}
        </button>
    );
};

export default Button;
