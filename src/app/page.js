"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Scrollbar from 'smooth-scrollbar';
import { Poppins,Damion } from 'next/font/google'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; 


const poppins = Poppins({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const damion = Damion({
  weight: '400',
  subsets: ['latin'],
});

gsap.registerPlugin(ScrollTrigger)


function colorChangeOnScroll(){
  useEffect(()=>{
    const scrollBar = Scrollbar.init(document.querySelector('.main'),{
      damping:0.06,
      alwaysShowTracks:false,
      speed:3
    })
  },[])

}

export default function Home() {
  return (
    <div className="main h-screen w-full flex flex-col overflow-x-hidden ">
      <section className="min-h-screen w-screen relative flex items-center justify-center px-32" data-bgcolor="#070707" data-textcolor="#ffffff">
        <div className="w-full  text-[9vw] leading-[1.1] tracking-tighter ">
          <span className={`${poppins.className} text-left`}>
            Scroll To Change
          </span>
          <div className="text-left">
            <span className={`${damion.className} text-green`}>
              Background{' '}
            </span>{' '}
            <span className={`${poppins.className} mx-8`}> Color </span>
          </div>
        </div>
      </section>
      <section className="min-h-screen w-screen relative flex items-center justify-center px-32" data-bgcolor="#3b2525" data-textcolor="#d0b6c0">
        <div className="w-full flex items-center justify-around">
          <div className="w-96 text-5xl">
            In nature, nothing is{' '}
            <span className={`${damion.className} text-green`}>perfect</span>{' '}
            and everything is perfect. Trees can be contorted, bent in weird
            ways, and they're still beautiful.
          </div>
          <div>
            <img src="https://images.pexels.com/photos/5604966/pexels-photo-5604966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="rounded-3xl"/>
          </div>
        </div>
      </section>
      <section className="min-h-screen w-screen relative flex items-center justify-center px-32"data-bgcolor="#3b3825"data-textcolor="#c2c1b3">
        <div className="w-full flex items-center justify-around">
          <div>
            <img src="https://images.pexels.com/photos/4467879/pexels-photo-4467879.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="rounded-3xl" />
          </div>
          <div className="w-96 text-5xl">
            Look deep into{' '}
            <span className={`${damion.className} text-green`}>Yourself</span> ,
            and then you will understand everything better.
          </div>
        </div>
      </section>
      <section className="min-h-screen w-screen relative " data-bgcolor="#032F35" data-textcolor="#b3c2ba">
        <div className="w-full flex items-center justify-around">
          <div className={`${poppins.className} w-96 text-5xl`}>
            The best thing one can do when it's raining is{' '}
            <span className={`${damion.className} text-green`}>
              to let it rain.
            </span>{' '}
          </div>
          <div>
            <img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="rounded-3xl"/>
          </div>
        </div>
      </section>
      <section className="min-h-screen w-screen relative flex items-center justify-center px-32" data-bgcolor="#582e1a" data-textcolor="#ffffff">
        <div className="w-full  text-[9vw] leading-[1.1] tracking-tighter ">
          <span className={`${poppins.className}`}>End Of Scroll</span>
        </div>
      </section>
    </div>
  );
}
