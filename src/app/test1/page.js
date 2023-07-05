"use client"
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const page = () => {
    return (
        <div className='h-screen w-screen p-3 flex flex-col items-center justify-center'>
            <motion.h1 layoutId={"header"} className='mb-10 font-black text-7xl'>Shops</motion.h1>
            <div className='flex gap-x-[30px]'>
                {["shoe","watch","headphones"].map((product)=>(
                    <Link href={`/test1/${product}`}>
                        <motion.img layoutId={product} whileHover={{scale:1.1}} src={product+".jpg"} alt='' className='h-[300px] object-cover cursor-pointer w-[300px] rounded-lg'/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default page