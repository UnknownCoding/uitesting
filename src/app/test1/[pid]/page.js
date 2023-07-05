"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import {motion} from 'framer-motion'

const page = () => {
    const params = useParams()
    return (
        <div className='h-screen w-screen p-3 flex flex-col items-center justify-center'>
            <motion.h1 layoutId={"header"} className='mb-10 font-black text-7xl'>{params.pid}</motion.h1>
            <motion.img layoutId={params.pid} className='w-[500px] h-[500px] rounded-md ' alt='' src={`../${params.pid}.jpg`}/>
        </div>
    )
}

export default page 