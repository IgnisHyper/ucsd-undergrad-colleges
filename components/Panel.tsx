'use client'

import type { ReactNode } from 'react';

export default function Panel({children}: { children: ReactNode }){
    return (
        <div className="bg-white shadow-xl rounded-xl p-6 w-full border border-gray-200">
            {children}
        </div>
    )
}