"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import gsap from 'gsap';


import summer from '../public/IMG/summer.png'
import coupon1 from '../public/IMG/coupon1.png'
import formals from '../public/IMG/formals.png'
import trends from '../public/IMG/trends.png'
import sale1 from '../public/IMG/sale1.png'
import Winter from '../public/IMG/Winter.png'
import coupon3 from '../public/IMG/coupon3.png'
import coupon2 from '../public/IMG/coupon2.png'
import casual from '../public/IMG/casual.png'
import sale2 from '../public/IMG/sale2.png'
import ethnic from '../public/IMG/ethnic.png'
import coupon4 from '../public/IMG/coupon4.png'
import party from '../public/IMG/party.png'
import sale3 from '../public/IMG/sale3.png'
import logo from '../public/IMG/logo.png'
import Navbar from './Navbar'
// import { animatePageIn } from '@/app/Animation/animate';


const LandingPage = () => {
// const [mousePosition, setMousePosition] = useState({
//   x:0,
//   y:0
// })

// useEffect(()=>{
// const mouseMove = (e)=>{
//   setMousePosition({
//     x:e.clientX,
//     y:e.clientY
//   })
// }
//   document.querySelector(".container").addEventListener("mousemove", mouseMove);

//   return  ()=>{
//     document.querySelector(".container").removeEventListener("mousemove", mouseMove);
//   }

// },[])

  return (
    <>
      <div className='ParentDiv w-[100vw] h-[100vh] bg-[#A9E5FF] relative overflow-hidden'>
        <Image className='absolute left-3 top-3 w-16' src={logo} />
        <Navbar />
        <div className="overlay w-full h-screen bg-gradient-to-l from-slate-900 ... absolute z-10 hidden"></div>
        <div className="container absolute w-[100vw] h-[100vh] grid grid-rows-2 -rotate-12 ">
          {/* <motion.div animate={{x:mousePosition.x, y:mousePosition.y}} transition={{ease:"linear"}} id='cursorDiv' className='pt-6 pb-6 pr-3 pl-3 rounded-full bg-black fixed text-white text-[0.8vw] uppercase z-30'><span className='text-xl'>E</span>xplore</motion.div> */}
          <div className='relative w-full h-full flex'>
            <div className="child1 w-auto h-full flex items-center">
              <h1 className='text1 absolute z-10 -top-14 text-8xl font-bold'>VOUGE FASHION TREND CLASSY</h1>
              {[summer, coupon1, trends, sale1, Winter, coupon3, formals].map((elements, index) => (
                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ ease: "easeOut", duration: 0.4 }} className="elem1 border min-w-[16vw] h-[95%] p-1 bg-white flex mr-3 z-20 shadow-md shadow-slate-500 shadow-b-2 shadow-r-[6px] -shadow-spread-6">
                  <Image key={index} src={elements} />
                </motion.div>
              )
              )}
            </div>
            <div className="child1 w-auto h-full flex items-center">
              <h1 className='text1 absolute z-10 -top-14 text-8xl font-bold'>VOUGE FASHION TREND CLASSY</h1>
              {[summer, coupon1, trends, sale1, Winter, coupon3, formals].map((elements, index) => (
                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ ease: "easeOut", duration: 0.4 }} className="elem1 border min-w-[16vw] h-[95%] p-1 bg-white shadow-md shadow-slate-500 shadow-b-2 shadow-r-[6px] -shadow-spread-6 flex mr-3 z-20">
                  <Image key={index} src={elements} />
                </motion.div>
              )
              )}
            </div>
          </div>
          <div className='relative w-full h-full flex '>
            <div className="child2 w-auto h-full flex items-center">
              {[coupon2, casual, sale2, ethnic, coupon4, party, sale3].map((elements, index) => (
                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ ease: "easeOut", duration: 0.4 }} className="elem border min-w-[16vw] h-[95%] p-1 bg-white shadow-md shadow-slate-500 shadow-b-2 shadow-r-[6px] -shadow-spread-6 flex mr-3 z-20">
                  <Image key={index} src={elements} />
                </motion.div>
              )
              )}
              <h1 className='text1 absolute z-10 -bottom-14 text-8xl font-bold'>VOUGE FASHION TREND CLASSY</h1>
            </div>
            <div className="child2 w-auto h-full flex items-center">
              {[coupon2, casual, sale2, ethnic, coupon4, party, sale3].map((elements, index) => (
                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ ease: "easeOut", duration: 0.4 }} className="elem border min-w-[16vw] h-[95%] p-1 bg-white shadow-md shadow-slate-500 shadow-b-2 shadow-r-[6px] -shadow-spread-6 flex mr-3 z-20">
                  <Image key={index} src={elements} />
                </motion.div>
              )
              )}
              <h1 className='text1 absolute z-10 -bottom-14 text-8xl font-bold'>VOUGE FASHION TREND CLASSY</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
''