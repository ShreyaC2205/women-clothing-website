"use client"
import BackgroundAdd1 from '@/Components/BackgroundAdd1'
import LandingPage from '@/Components/LandingPage'
import Navbar from '@/Components/Navbar'
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
// import Footer from '@/Components/Footer'



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
      <Coords Coimg1="/IMG/pair1a.jpg" Coimg2="/IMG/pair1b.png" Coimg3="/IMG/pair2b.jpg" Coimg4="/IMG/pair2a.png" Coimg5="/IMG/pair3b.jpg" Coimg6="/IMG/pair3a.png" Coimg7="/IMG/pair4a.jpg" Coimg8="/IMG/pair1b.png" Coimg9="/IMG/pair5b.png" Coimg10="/IMG/pair5a.png" qbrand1="Fabulous" qbrand2="Fabulous" qbrand3="Closet Luxe" qbrand4="Closet Luxe" qbrand5="SirenStyle" qbrand6="SirenStyle" qbrand7="Eleganza" qbrand8="Eleganza" qbrand9="Plush Peach" qbrand10="Plush Peach" qdesc1="Blue Oversized Shirt" qdesc2="White Straight Fit Trouser" qdesc3="Orange No sleeve Crop Top" qdesc4="Blue Straight Fit Trouser" qdesc5="Purple Solid Casual Blazer" qdesc6="Black Straight Fit Trouser" qdesc7="Levender Wrap Crop Top" qdesc8="White Straight Fit Trouser" qdesc9="White Off-shoulder Top" qdesc10="Beige Straight Fit Trouser" qprice1="799" qprice2="1299" qprice3="399" qprice4="1099" qprice5="1399" qprice6="1199" qprice7="999" qprice8="1299" qprice9="899" qprice10="1499" qoffer1="16%" qoffer2="23%" qoffer3="6%" qoffer4="33%" qoffer5="26%" qoffer6="46%" qoffer7="11%" qoffer8="23%" qoffer9="34%" qoffer10="19%" qrating1="4.0" qrating2="4.3" qrating3="4.6" qrating4="4.2" qrating5="4.0" qrating6="3.9" qrating7="4.8" qrating8="4.3" qrating9="4.2" qrating10="4.8"

        p2coimg1="/IMG/sec2pair1a.jpg" p2coimg2="/IMG/sec2pair1b.jpg" p2coimg3="/IMG/sec2pair2a.jpg" p2coimg4="/IMG/sec2pair2b.jpg" p2coimg5="/IMG/sec2pair3a.jpg" p2coimg6="/IMG/sec2pair3b.jpg" p2coimg7="/IMG/sec2pair4a.jpg" p2coimg8="/IMG/sec2pair4b.jpg" p2coimg9="/IMG/sec2pair5a.jpg" p2coimg10="/IMG/sec2pair5b.jpg" p2brand1="Enigma" p2brand2="Enigma" p2brand3="Aura" p2brand4="Aura" p2brand5="Elara" p2brand6="Elara" p2brand7="Divina" p2brand8="Divina" p2brand9="Allegra" p2brand10="Allegra" p2desc1="Mint Green Crop Sweater" p2desc2="Floral Printed Midi Skirt" p2desc3="White Casual Half-Sleeve Shirt" p2desc4="Levender Shoulder Strap Midi Dress" p2desc5="Skyblue Ruffle Top" p2desc6="White Midi Skirt" p2desc7="White Crop Collar T-shirt" p2desc8="Navy Blue Mini Skirt" p2desc9="GoldBrown Silk Wrap Top" p2desc10="High Waist Gray Long Skirt" p2price1="1399" p2price2="899" p2price3="699" p2price4="1099" p2price5="599" p2price6="799" p2price7="499" p2price8="1199" p2price9="1299" p2price10="899" p2offer1="20%" p2offer2="11%" p2offer3="23%" p2offer4="29%" p2offer5="8%" p2offer6="33%" p2offer7="39%" p2offer8="18%" p2offer9="12%" p2offer10="21%" p2rating1="4.3" p2rating2="3.8" p2rating3="4.1" p2rating4="4.5" p2rating5="4.7" p2rating6="4.6" p2rating7="4.2" p2rating8="4.0" p2rating9="4.8" p2rating10="4.0" />
      <ContactUs />
      {/* <Footer/> */}
    </div>
  )
}

export default page
