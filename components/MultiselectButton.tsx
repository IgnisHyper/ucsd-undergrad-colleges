import { MouseEventHandler, ReactNode } from "react";

export default function MultiselectButton({children, selected, onClick}: {children: ReactNode, selected: boolean, onClick: MouseEventHandler<HTMLButtonElement>}){
    if(selected){
        return(
            <button className="p-3 border border-blue-500 bg-blue-50 rounded-lg text-left w-full
                                hover:bg-gray-100 active:bg-gray-200 transition"
                    onClick={onClick}>
                {children}
            </button>
        )
    }
    return(
        <button className="p-3 border border-gray-300 rounded-lg text-left w-full
                                hover:bg-gray-100 active:bg-gray-200 transition"
                onClick={onClick}>
            {children}
        </button>
    ) 
}