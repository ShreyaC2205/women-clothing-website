"use client"
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import BackgroundAdd1 from '@/Components/BackgroundAdd1'
import LandingPage from '@/Components/LandingPage'

import Trending from '@/Components/Trending'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { cubicBezier } from 'framer-motion'
import OfferZone from '@/Components/OfferZone'
import Coords from '@/Components/Coords'
import Coupons from '@/Components/Coupons'
import Categories from '@/Components/Categories'
import BackgroundAd2 from '@/Components/BackgroundAd2'
import LowPrice from '@/Components/LowPrice'
import Shop from '@/Components/Shop'
import BestSeller from '@/Components/BestSeller'
import NewArrival from '@/Components/NewArrival'
import ContactUs from '@/Components/ContactUs'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from '@/Components/Navbar';



const page = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true,
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="main bg-[#26292c]">
      <Navbar />
      <LandingPage />
      <Coupons />
      <BackgroundAd2 />
      <LowPrice />
      <Categories />
      <BackgroundAdd1/>
      <OfferZone />
      <BestSeller />
      <Shop />
      <NewArrival />
      <div className='relative w-[100%] h-[218vh] bg-[#A9E5FF] rounded-tl-[2vw] rounded-tr-[2vw] rounded-br-[2vw] rounded-bl-[2vw] z-50'>
        <h1 className='trendh1 text-[#62d0ff96] absolute top-[84vh] flex items-baseline left-1/2 -translate-x-1/2 text-[15.5vw]'><span className='hash text-[12vw]'>#</span>TREND<motion.span initial={{ y: "100%" }} whileInView={{ y: "0" }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.2 }} className='trendSpan text-[8vw]'>Zone</motion.span></h1>
        <div className='flex '>
          <Trending brandName="FabIndia" video="/IMG/video1.mp4" follower="20k Followers" img1="/IMG/dress3.png" img2="/IMG/dress1.png" img3="/IMG/dress2.png" img4="/IMG/dress4.png" description1="Women Pink Hanging V-Neck Top" description2="Women Neon Ruffle Top" description3="Women Blue Angle Sleeve Top" description4="Women Pink V-Neck Puff Sleeves Top" rating1="4.2" rating2="4.1" rating3="4.3" rating4="4.0" offer1="64% off" offer2="47% off" offer3="47% off" offer4="40% off" price1="1199" price2="999" price3="699" price4="700" categ1="WESTERN" categ1a="WEAR" position="top-[2vw] text-xs" />
          <Trending brandName="En Vouge" video="/IMG/video2.mp4" follower="16k Followers" img1="/IMG/dress5.png" img2="/IMG/dress6.png" img3="/IMG/dress7.png" img4="/IMG/pairWith1.png" description1="Women Olive Blazer Set" description2="Women Dark-gray Blazer Set" description3="Women Sky-blue Blazer Set" description4="Women Black Crop Top" rating1="4.0" rating2="3.9" rating3="4.5" rating4="4.1" offer1="23% off" offer2="42% off" offer3="34% off" offer4="10% off" price1="2199" price2="1799" price3="2499" price4="599" categ1="FORMAL" categ1a="WEAR" position="top-[2vw] text-xs"/>
        </div>
        <div className='flex relative '>
          <Trending brandName="Moksha" video="/IMG/video3final.mp4" follower="32k Followers" img1="/IMG/dress8.png" img2="/IMG/dress13.png" img3="/IMG/dress14.png" img4="/IMG/dress15.png" description1="Women Embroided Top & Jacket pants" description2="Women Ready to wear Saree Gown" description3="Women Coin & Shell Detailed Lehenga Set" description4="Women Yellow Lace-work Kurta with Plazo" rating1="3.9" rating2="4.2" rating3="4.0" rating4="4.3" offer1="16% off" offer2="30% off" offer3="19% off" offer4="23% off" price1="2999" price2="1799" price3="3499" price4="1599" categ1="FUSION" categ1a="WEAR" position="-bottom-[6.5vw] text-xs" />
          <Trending brandName="ClassyCloset" video="/IMG/video4.mp4" follower="24k Followers" img1="/IMG/dress10.png" img2="/IMG/dress12.png" img3="/IMG/dress9.png" img4="/IMG/dress11.png" description1="Women Italian Wool White Midi Coat" description2="Women Backless Skinny Maxi Dress" description3="Women Brown Long Overcoat" description4="Women Beige Spring Autumn Blazer" rating1="4.5" rating2="3.8" rating3="4.1" rating4="4.3" offer1="33% off" offer2="19% off" offer3="26% off" offer4="31% off" price1="5999" price2="1399" price3="2999" price4="1999" categ1="WINTER" categ1a="WEAR" position="-bottom-[6.5vw] text-xs"/>
        </div>
      </div>
      <Coords />
      <ContactUs />
      {/* <Footer/> */}
    </div>
  )
}

export default page
