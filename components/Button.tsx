import type { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
};

export default function Button({children, onClick, type = "button"}: ButtonProps){
    return (
        <button
            type={type}
            className="px-5 py-2.5 bg-red-600 text-white font-medium rounded-lg shadow 
            hover:bg-blue-700 active:bg-blue-800 
            focus:outline-none focus:ring-2 focus:ring-blue-300
            transition-all duration-150"
            onClick={onClick}>
            {children}
        </button>
    )
}
