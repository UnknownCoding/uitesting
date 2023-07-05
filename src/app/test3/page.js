"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

const page = () => {
    return (
        <div className='bg-[#5F6B9D] flex justify-center items-center w-screen h-screen overflow-y-hidden '>
            <div className='max-w-[400px]'>
                <Link href="/test4">
                    <motion.img
                        transition={{duration:0.6,ease:[0.6,0.01,-0.05,0.9]}}
                        whileHover={{scale:1.1}}
                        src='https://imgresizer.eurosport.com/unsafe/1200x1200/smart/filters:format(jpeg)/origin-imgresizer.eurosport.com/2017/07/31/2137158-44700570-2560-1440.jpg' 
                        alt='' 
                        className='w-full cursor-pointer rounded-sm h-[500px] object-cover'
                    />
                </Link>
                <div className='flex mt-9 items-center justify-between'>
                    <p className='rondop'>CRISTIANO RONALDO</p>
                    <p className='rondop'> 2017-CARDIFF</p>
                </div>
            </div>             
        </div>
    )
}                   

export default page