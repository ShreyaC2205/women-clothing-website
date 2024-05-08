"use client"
// import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faHeart, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { cubicBezier } from 'framer-motion'
import ProductCard from './ProductCard'

const Trending = (Props) => {
  return (
    <div className='relative mainsec w-[100%] h-[100vh]  p-2'>
      <div className={`absolute sec1 w-auto grid grid-cols-[50%_48%] z-10 h-[94.3%] ${Props.position} bg-slate-200 pt-2 pl-2 pr-2 gap-[0.8vw] rounded-3xl shadow-[1px_1px_6px_gray] overflow-hidden`}>
        <motion.h1 initial={{ left: "0%", opacity: 0 }} whileInView={{ left: "54%", opacity: 1 }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.2 }} className='categ1 absolute z-10 flex top-1/2 -translate-y-[100%] text-[4.2vw] font-bold text-gray-900' >{Props.categ1}</motion.h1>
        <motion.h1 initial={{ bottom: "10%", opacity: 0 }} whileInView={{ bottom: "35%", opacity: 1 }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.2 }} className='categ2 absolute z-10 flex right-4 text-[7vw] font-bold'>{Props.categ1a}</motion.h1>

        <div className="relative vid z-30 max-h-[98%]">
          <div className='absolute flex top-3 left-3 gap-2'>
            <FontAwesomeIcon icon={faCircleUser} className='text-3xl text-slate-200/60' />
            <div className='brandName flex flex-col text-xs'>
              <span className='font-bold text-slate-100'>{Props.brandName}</span>
              <span className='text-slate-300 text-[0.8vw]'>{Props.follower}</span>
            </div>
            <button className='FollowBtn p-1 border border-gray-300 bg-transparent text-slate-200 text-[0.7vw] rounded-md cursor-pointer'>FOLLOW</button>
          </div>
          <div>
          </div>
          <div className='absolute icons flex  bottom-6 right-5 gap-6'>
            <FontAwesomeIcon icon={faHeart} className='text-2xl text-slate-200/60' />
            <FontAwesomeIcon icon={faBookmark} className='text-2xl text-slate-200/60' />
            <FontAwesomeIcon icon={faShare} className='text-2xl text-slate-200/60' />
          </div>
          <video autoPlay muted loop className='rounded-2xl min-w-full ' src={Props.video}></video>
        </div>
        <motion.div initial={{ left: "-100%" }} whileInView={{ left: 0 }} transition={{ ease: cubicBezier(.72, 0, .52, .97), duration: 2, delay: 1.4 }} className="relative imgs max-h-[90%] min-h-[97%] w-auto bg-blue-300 z-20 p-2 grid grid-rows-[49%_49%] rounded-2xl gap-2">
          <div className='flex  gap-2'>
            <ProductCard image={Props.img1} brandName={Props.brandName} description={Props.description1} rating={Props.rating1} offer={Props.offer1} price={Props.price1} />
            <ProductCard image={Props.img2} brandName={Props.brandName} description={Props.description2} rating={Props.rating2} offer={Props.offer2} price={Props.price2} />
          </div>
          <div className='flex gap-2'>
            <ProductCard image={Props.img3} brandName={Props.brandName} description={Props.description3} rating={Props.rating3} offer={Props.offer3} price={Props.price3} />
            <ProductCard image={Props.img4} brandName={Props.brandName} description={Props.description4} rating={Props.rating4} offer={Props.offer4} price={Props.price4} />
          </div>
        </motion.div>
      </div>
    </div>

  )
}

export default Trending
