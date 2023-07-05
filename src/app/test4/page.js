"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400','900','800','700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});  

function page() {
    return (
        <div className='w-screen h-screen bg-[#5F6B9D]'>
            <div className='w-full'>
                <div className='max-w-max mx-auto pt-[150px]'>
                    <div className='flex justify-between items-center'>
                        <p className='rondop'>TRAINING CHAMPIONS LEAGUE FINAL</p>
                        <p className='rondop'> 2017-CARDIFF</p>
                    </div>
                    <h1 className={`${poppins.className} font-extrabold text-[90px]`}>CRISTIANO RONALDO</h1>
                </div>
            </div>
            <div className='w-full h-[500px] pt-[30px]'>
                <motion.img 
                    
                    alt='' 
                    src='https://eu-images.contentstack.com/v3/assets/bltcc7a7ffd2fbf71f5/bltba2229d70a9bb994/60df1788cc810807a32eb1f4/f26a334beb3062079d85ff2db17dbcd06b76767b.jpg' 
                    className='w-full object-center object-cover h-full'
                    />
            </div>
        </div>
    )
}

export default page