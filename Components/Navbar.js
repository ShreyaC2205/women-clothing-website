"use client"
import { motion } from 'framer-motion'
// import Link from 'next/link'
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPhone, faCartShopping, faHeart, faMobileScreen, faComments, faHouse, faList, faCertificate, faAward, faPercent, faLightbulb, faTruckFast, faBell, faStar, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
 
  const [state, setState] = useState(0)
  function btnClick() {
    if (state === 0) {
      document.querySelector('.nav')
        .style.width = "15vw"
      // document.querySelector(".lists").style.opacity = 1
      document.querySelector(".overlay").style.display = "block"
      document.querySelector(".divv").style.opacity = 1
      document.querySelector(".div1").style.opacity = 1
      document.querySelector(".div2").style.opacity = 1
      document.querySelector(".div3").style.opacity = 1
      document.getElementById('#arrow').classList.add("arrowflip")
      document.getElementById('#arrow').style.transition = "all 1s"
      setState(1)
    }
    else {
      document.querySelector('.nav').style.width = "0vw"
      // document.querySelector(".lists").style.opacity = 0
      document.querySelector(".overlay").style.display = "none"
      document.querySelector(".divv").style.opacity = 0
      document.querySelector(".div1").style.opacity = 0
      document.querySelector(".div2").style.opacity = 0
      document.querySelector(".div3").style.opacity = 0
      document.getElementById('#arrow').classList.remove("arrowflip")
      document.getElementById('#arrow').style.transition = "all 1s"
      setState(0)
    }
  }
  return (
    <div style={{ transition: "width .8s" }} className='nav w-0 fixed right-0 h-[100vh] bg-gray-900 z-30 text-centers rounded-tl-xl rounded-bl-xl grid grid-rows-[20%_29%_29%_22%] select-none'>
      <div style={{ transition: "opacity .5s" }} className='divv relative flex-col pl-6 pr-6 pt-3'>
        <span className='absolute text-slate-300 text-sm'>Hello,</span>
        <FontAwesomeIcon icon={faBell} className='absolute right-5 top-4 text-md text-slate-500' />
        <button className="login relative top-9 text-slate-100 bg-transparent rounded-md p-2 border border-slate-300 text-xs uppercase hover:text-black font-semibold overflow-hidden">Login / Sigup</button>
        <p className='absolute w-[10.5vw] top-[6.3vw] text-slate-400 text-[0.73vw] text-start'>Login/SignUp to manage your account.</p>
      </div>

      <div style={{ transition: "opacity .5s" }} className='div1 w-full relative flex-cols pt-3 boorder border-t-[0.1vw] border-gray-800 pl-6'>
        <input placeholder='Search for products..' type="search" name="Search" id="Search" className=' absolute searchbar w-[79%] h-[2vw] rounded-xl outline-none pl-8 text-sm placeholder:text-xs mb-2 ' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute left-8 top-[1.4vw] text-sm text-slate-500' />
        
          <h1 style={{transition: "font 0.4s"}} className='fontfam absolute left-[4vw] top-[4vw] text-[1.07vw] text-slate-100 hover:text-[1.1vw] hover:text-yellow-500 cursor-pointer'>Cart</h1>
          <FontAwesomeIcon icon={faCartShopping} className='absolute top-[4.2vw] text-[1.1vw] text-slate-500' />
          <h1 style={{transition: "font 0.4s"}} className='fontfam absolute left-[4vw] top-[6vw]  text-[1.07vw] text-slate-100 hover:text-[1.1vw] hover:text-yellow-500 cursor-pointer'>Wishlist</h1>
          <FontAwesomeIcon icon={faHeart} className='absolute top-[6.1vw] text-[1.1vw] text-slate-500' />
          <h1 style={{transition: "font 0.4s"}} className='fontfam absolute left-[4vw] top-[7.9vw]  text-[1.07vw] text-slate-100 hover:text-[1.1vw] hover:text-yellow-500 cursor-pointer'>Track Orders</h1>
          <FontAwesomeIcon icon={faTruckFast} className='absolute top-[8vw] text-[1.1vw] text-slate-500' />
      

        <FontAwesomeIcon icon={faMobileScreen} className='absolute left-8 top-[10.6vw] text-md text-slate-500' />
        <button className="login  absolute top-[10vw] text-slate-100 bg-transparent rounded-md p-2 pl-7 border border-slate-300 text-xs uppercase hover:text-black font-semibold overflow-hidden">Download the app</button>
      </div>

      <div style={{ transition: "opacity .5s" }} className='div2 w-full relative border border-t-[0.1vw] border-gray-800 pt-3 pl-6 pr-6 flex gap-3'>
        <div className='flex flex-col gap-[1.13vw] pt-[0.1vw]'>
          <FontAwesomeIcon icon={faPercent} className='absolute left-[2.2vw] top-[7.32vw] text-[0.7vw] text-gray-900' />
          {[faHouse, faList, faStar, faCertificate, faAward, faLightbulb].map((items, index) => {
            return <FontAwesomeIcon key={index} icon={items} className={`text-[1vw] text-slate-500 ${index >= 2 && "text-[1.32vw] -mt-[0.4vw]"}`} />
          }
          )}
        </div>
        <div>
          {["Home", "Categories", "Customer Review", "Offer & Coupons", "Top Brands", "Fashion Tips"].map((items, index) => {
            return <li style={{transition:"all 0.3s"}} key={index} className='fontfam navList list-none text-slate-100 text-[1.08vw] mb-[0.36vw] hover:text-[1.1vw] hover:text-yellow-500'><a key={index} href="#">{items}</a></li>
          }
          )}
        </div>
      </div>

      <div className='div3 relative boorder border-t-[0.1vw] border-gray-800 pt-3 pl-6 pr-6'>
        <FontAwesomeIcon icon={faPhone} className='absolute left-7 top-[3.5vw] text-sm text-slate-500' />
        <span className='fontfam text-slate-100 absolute top-12 left-14 text-xs'>1800 800 800</span>
        <FontAwesomeIcon icon={faPhone} className='absolute left-7 top-[5vw] text-sm text-slate-500' />
        <span className='fontfam text-slate-100 absolute top-[5vw] left-14 text-xs'>1800 300 500</span>
        <h1 className='fontfam absolute text-sm text-slate-300'>24x7 Customer Support</h1>
        <FontAwesomeIcon icon={faComments} className='absolute top-[7.8vw] left-8 text-sm text-slate-500' />
        <button className="login absolute  top-24 pl-8 text-slate-100 bg-transparent rounded-md p-2 border border-slate-300 text-xs uppercase hover:text-black font-semibold overflow-hidden">Chat with us</button>
      </div>
      <FontAwesomeIcon style={{transition:"all 0.2s"}} id='#arrow' onClick={btnClick} icon={faAnglesLeft} className='absolute text-xl -left-[3.5vw] top-[50%] translate-y-[-50%] text-[#26292c] z-30' />
      <button style={{transition: "all 0.5s"}} onClick={btnClick} className='btn Navi w-auto h-auto absolute -left-[5vw] top-[50%] translate-y-[-50%] bg-yellow-500 -rotate-90 text-md p-2 pt-6 rounded-t-xl hover:scale-[1.1] uppercase'>Navigation</button>
    </div>
  )
}

export default Navbar



