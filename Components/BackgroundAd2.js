"use client"
import React, { useEffect } from 'react'
import { cubicBezier, motion } from 'framer-motion'
import Image from 'next/image';
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { Timeline } from 'gsap/gsap-core'


gsap.registerPlugin(useGSAP);



const BackgroundAd2 = () => {
  useGSAP(() => {
    const tl = new Timeline({ repeat: -1, repeatDealay: 8 })
    tl.to(".AnimImg", {
      ease: "expo.inOut",
      stagger: 5,
      opacity: 1,
      duration: 2
    }, 'anim').to(".AnimImg", {
      delay: 5,
      ease: "expo.inOut",
      stagger: 5,
      opacity: 0,
    }, 'anim')
  })
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.6" className='w-[100%] h-[100vh] bg-[#A9E5FF] rounded-tl-[2vw] rounded-tr-[2vw] rounded-br-[2vw] rounded-bl-[2vw] z-50'>
      <div className='relative w-full h-full rounded-tr-[2vw] overflow-hidden flex items-center justify-center'>
        <div className="absolute circle w-[70vw] h-[30vw] bg-yellow-500 rounded-full z-30 cursor-pointer shadow-[2px_2px_8px_gray]">
          <motion.div initial={{ opacity: "0" }} whileInView={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 1.5 }} className="saleHeading w-auto h-auto relative left-20 top-2 flex flex-col items-center">
            <span className='EndOfSeason'>END OF SEASON</span>
            <span className='EndOfSeasonSale -mt-2'>SALE</span>
            <span className='EndOfSeasonOffer -mt-2'>50% TO 90% OFF</span>
            <span className='text-[1.3vw] text-black mb-8 mt-2 font-bold'>ON ALL PURCHASE</span>
            <button className='w-auto h-auto rounded-[2.2vw] bg-red-600 px-4 p-2 text-center font-extrabold text-blue-300 adBtn cursor-pointer shadow-md shadow-gray-800 shadow-b-1 shadow-r-[2px] -shadow-spread-4 hover:bg-red-800'>SHOP NOW</button>
          </motion.div>
        </div>
        <motion.div initial={{ left: "22vw" }} whileInView={{ left: "-26vw" }} transition={{ ease: "easeInOut", duration: 1 }} className='relative mobImg w-[20vw] h-[68vh] z-40'>
          <div className=" absolute left-10 bottom-1 saleBG w-[15vw] h-[31vw] rounded-[2.6vw] -z-10 overflow-hidden bg-purple-500">
            <Image className=' absolute z-10 top-1/2 -translate-y-1/2' src="/IMG/AD2/saleText.png" alt="sale Text" width={306} height={306} quality={100} />
            <Image
              src="/IMG/AD2/saleBG6.jpeg"
              alt="saleBG"
              fill
              sizes='50vw, 50vw'
              quality={100}
              className='rounded-2xl object-cover' />
          </div>
          <div className='shIMG2 AnimImg z-30 w-[30vw] h-[30vw] relative left-10 -bottom-7 opacity-0 '>
            <Image
              src="/IMG/AD2/adImg1.jpg"
              alt="adImg1"
              fill 
              sizes='50vw, 50vw'
              quality={100}
              className='absolute object-contain'/>
          </div>
          <div className='shIMG2 AnimImg z-30 w-[35vw] h-[35vw] absolute  -left-12 -bottom-1 opacity-0'>
            <Image  src="/IMG/AD2/adImg2.jpg" 
            alt="adImg2" 
            fill 
            sizes='50vw, 50vw' 
            quality={100} 
            className='absolute object-contain'/>
          </div>
          <div className='shIMG2 AnimImg z-30 w-[32vw] h-[32vw] absolute  -left-2 -bottom-4  opacity-0'>
            <Image src="/IMG/AD2/adImg3.jpg" 
            alt="adImg3" 
            fill 
            sizes='50vw, 50vw' 
            quality={100} 
            className='absolute object-contain'/>
          </div>
          <Image id='phoneBG' src="/IMG/phoneScreen.png" alt="mobile Img" className='absolute mobile object-contain' fill sizes='50vw, 50vw' quality={100} />
        </motion.div>
        <div className=' overflow-hidden scrollText h-[100%] z-20 w-[100%] absolute  bottom-0 '>
          <div className="offerTextroll leading-[7vw] text-center">
            <h1 className='offerText text-[7vw] text-[#62d0ffce]'>SALE<span className='coText ml-8'>IS</span><span className='coText ml-8'>LIVE</span></h1>
            <h1 className='offerText text-[7vw] text-[#62d0ffce]'>SALE<span className='coText ml-8'>IS</span><span className='coText ml-8'>LIVE</span></h1>
            <h1 className='offerText text-[7vw] text-[#62d0ffce]'>SALE<span className='coText ml-8'>IS</span><span className='coText ml-8'>LIVE</span></h1>
            <h1 className='offerText text-[7vw] text-[#62d0ffce]'>SALE<span className='coText ml-8'>IS</span><span className='coText ml-8'>LIVE</span></h1>
            <h1 className='offerText text-[7vw] text-[#62d0ffce]'>SALE<span className='coText ml-8'>IS</span><span className='coText ml-8'>LIVE</span></h1>
            <h1 className='offerText text-[7vw] text-[#62d0ffce]'>SALE<span className='coText ml-8'>IS</span><span className='coText ml-8'>LIVE</span></h1>
          </div>

          <div className="offerTextroll leading-[7vw] text-center">
            <h1 className='offerText text-[7vw] text-[#62d0ffce]'>SALE<span className='coText ml-8'>IS</span><span className='coText ml-8'>LIVE</span></h1>
            <h1 className='offerText text-[7vw] text-[#62d0ffce]'>SALE<span className='coText ml-8'>IS</span><span className='coText ml-8'>LIVE</span></h1>
            <h1 className='offerText text-[7vw] text-[#62d0ffce]'>SALE<span className='coText ml-8'>IS</span><span className='coText ml-8'>LIVE</span></h1>
            <h1 className='offerText text-[7vw] text-[#62d0ffce]'>SALE<span className='coText ml-8'>IS</span><span className='coText ml-8'>LIVE</span></h1>
            <h1 className='offerText text-[7vw] text-[#62d0ffce]'>SALE<span className='coText ml-8'>IS</span><span className='coText ml-8'>LIVE</span></h1>
            <h1 className='offerText text-[7vw] text-[#62d0ffce]'>SALE<span className='coText ml-8'>IS</span><span className='coText ml-8'>LIVE</span></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundAd2
