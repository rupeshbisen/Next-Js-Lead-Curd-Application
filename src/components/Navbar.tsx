'use client'
import React from 'react'
import { useRouter } from 'next/navigation'


export default function Navbar() {

    const router = useRouter();

    return (
        <>
            <nav className='bg-gray-500 fixed w-full z-20 top-0 left-0'>
                <div className='max-w-screen-2xl flex items-center justify-between mx-auto p-4 '>
                    <div onClick={() => router.push('/')} className='flex items-center cursor-pointer'>
                        <span className='text-xl md:text-3xl mx-1 md:mx-5'>🏠</span>
                    </div>
                </div>
            </nav>
        </>
    )
}
