"use client"
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cubicBezier, motion } from 'framer-motion'
import { faPlus, faStar, faQuoteLeft, faQuoteRightAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
  const profiles = [["Pooja Gupta", "Absolutely love my new dress! The fit is perfect, and the quality exceeded my expectations. Will buy again!"], ["Kavita Desai", "The customer service team was very helpful when I had questions about sizing. They made shopping easy."], ["Ritu Tiwari", "Received so many compliments on my new jacket. Can't wait to shop here again for more fashionable items."], ["Sneha Joshi", "I've become a repeat customer because of the excellent quality and stylish designs that fit my taste perfectly."], ["Radhika Iyer", "Great value for the price. I feel like I got a designer item without breaking the bank. Very satisfied."], ["Sanya Verma", "The website is easy to navigate, and I found exactly what I was looking for quickly and hassle-free, great experience."], ["Meera Choudhury", "The colors of the clothes are vibrant and exactly as shown on the website. I'm impressed with the accuracy.Go for it!"], ["Diya Chatterjee", "Easy returns and exchanges made shopping stress-free. Their customer service team was really helpful too, Happy with the service."], ["Swati Sharma", "Shopping here is a treat. It's my go-to for updating my wardrobe each season with stylish and trendy pieces, Highly recommended."]]

  const reviewContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState(5000);

  useEffect(() => {
    const container = reviewContainerRef.current;

    if (!container) return;

    const handleScroll = () => {
      clearInterval(interval);
      setAutoScrollInterval(10000);

      const newInterval = setInterval(() => {
        const newPosition = scrollPosition + 450;
        setScrollPosition(newPosition);
        container.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        })

        if (newPosition >= container.scrollWidth - container.clientWidth) {
          setScrollPosition(0);
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        }
      }, 5000);

      interval = newInterval;
    };

    let interval = setInterval(() => {
      const newPosition = scrollPosition + 450;
      setScrollPosition(newPosition);
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });

      if (newPosition >= container.scrollWidth - container.clientWidth) {
        setScrollPosition(0);
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      }
    }, autoScrollInterval);

    container.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, autoScrollInterval]);


  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='contactContain relative w-[100%] h-[200vh] py-4  bg-[#26292c] z-40'>
      <div className="relative containerFeature grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-2 top-2 px-16">
        <div className="grid grid-cols-[1fr_1fr] place-items-center">
          <motion.div initial={{ x: "10vw" }} whileInView={{ x: "0vw" }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.5, delay: 1.5}} className="relative imgContain grayIMG ">
            <img src="/IMG/bestPrice.jpg" alt="best price" className='w-[95%]' />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 1, delay: 3.2 }} className="relative textF flex flex-col text-center text-[1.5vw] text-gray-400">
            <h1>High Quality</h1>
            <h1>Lowest Price</h1>
          </motion.div>
    </div>

        <div className="grid grid-cols-[1fr_1fr] place-items-center">
          <motion.div initial={{ x: "10vw" }} whileInView={{ x: "0vw" }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.5, delay: 1.5 }} className="relative imgContain grayIMG ">
            <img src="/IMG/easyreturn.png" alt="best price" className='w-[95%]' />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 1, delay: 3.2 }} className="relative textF flex flex-col text-center text-[1.5vw] text-gray-400">
            <h1>Easy Returns</h1>
            <h1>& Exchange</h1>
          </motion.div>
    </div>

        <div className="relative grid grid-cols-[1fr_1fr] place-items-center p-1">
          <motion.div initial={{ x: "10vw" }} whileInView={{ x: "0vw" }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.5, delay: 1.5 }} className="relative imgContain grayIMG1 h-[100%] w-[96%] border-[0.29vw] border-[#696969] rounded-full flex justify-center items-center">
            <img src="/IMG/tag.png" alt="easy return & exchange" className='relative w-[90%]  p-4' />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 1, delay: 3 }} className="relative textF flex flex-col text-center text-[1.5vw] text-gray-400 left-3">
            <h1>20k <FontAwesomeIcon icon={faPlus} /> Orignal</h1>
            <h1>Brands</h1>
          </motion.div>
        </div>

        <div className="relative grid grid-cols-[1fr_1fr] place-items-center p-1">
          <motion.div initial={{ x: "10vw" }} whileInView={{ x: "0vw" }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.5, delay: 1.5 }} className=" imgContain grayIMG border-[0.29vw] h-[95%] w-[93%] border-[#909090] rounded-full flex justify-center items-center overflow-hidden relative left-5">
            <img src="/IMG/cod2.png" alt="Pay on Cash" className='relative w-[100%]' />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 1, delay: 3.2 }} className="relative textF flex flex-col text-center text-[1.5vw] text-gray-400 left-3">
            <h1>Pay on</h1>
            <h1>Receiving</h1>
          </motion.div>
        </div>

     <div className=" grid grid-cols-[1fr_1fr] place-items-center p-1">
          <motion.div initial={{ x: "10vw" }} whileInView={{ x: "0vw" }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.5, delay: 1.5 }} className="imgContain grayIMG2 relative -left-1">
            <img src="/IMG/fastDelivery.png" alt="best price" className='w-[95%]' />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 1, delay: 3.2 }} className="relative textF flex flex-col text-center text-[1.5vw] text-gray-400">
            <h1>Free Shipping</h1>
            <h1>Fast Delivery</h1>
          </motion.div>
     </div>
      </div>

      <div className="socialSection grid grid-cols-[1fr_1fr_1fr] relative top-20 px-16">
        <div className=' px-6 pb-4 cabinFont2'>
          <div className="appStore w-[29vw]">
            <h1 className='text-lg  text-slate-200 mb-3'>EXPERIENCE ELEGYN APP ON MOBILE</h1>
            <img src="/IMG/playStoreIcon.png" alt="get app" className='w-[85%]' />
          </div>
          <div className="appStore w-[29vw]   mt-6">
            <h1 className='text-lg  mb-3 text-slate-200'>PAYMENT</h1>
            <img src="/IMG/payment.png" alt="get app" className='w-[85%]' />
          </div>
          <div className="appStore w-[29vw]   mt-6">
            <h1 className='text-lg mb-3 text-slate-200'>CONNECT WITH US</h1>
            <img src="/IMG/socialIcon.png" alt="get app" className='w-[85%]' />
          </div>
        </div>

        <div className="contactUs  px-6 flex flex-col pl-28">
          <h1 className='text-slate-200 text-lg cabinFont2 uppercase'>Help center</h1>
          <h1 className='text-slate-300 text-md cabinFont2 uppercase mt-6 mb-2 '>Call us at</h1>
          <div className='flex items-center gap-2 cabinFont1'>
            <FontAwesomeIcon icon={faPhone} className='text-sm text-slate-300 mb-1' />
            <span className=' text-slate-300 text-sm mb-1'>1800 800 800</span>
          </div>
          <div className='flex items-center gap-2 cabinFont1'>
            <FontAwesomeIcon icon={faPhone} className=' text-sm text-slate-300' />
            <span className=' text-slate-300 text-sm'>1800 300 500</span>
          </div>
          <div className='chatBTN mt-9'>
            <h1 className=' text-slate-300 text-md cabinFont2 uppercase mb-3'>24x7 Chat Support</h1>
            <button style={{ transition: "all 0.5s" }} className='relative login2 border-2 border-slate-300 p-2 rounded-md text-slate-300 cabinFont2 text-sm hover:text-gray-800 overflow-hidden z-20'>CHAT WITH US</button>
          </div>
          <h1 className='text-slate-300 text-md cabinFont2 uppercase mb-11 relative top-9'>Mail Us At</h1>
          <div className="mail flex items-center cabinFont1">
            <FontAwesomeIcon icon={faEnvelope} className='text-slate-300 text-md mr-2' />
            <span className='text-slate-300 text-md'>elegyn@gmail.com</span>
          </div>
        </div>
        <div className=" relaticontactUs  px-6">
          <h1 className='text-slate-200 text-lg cabinFont2 uppercase'> Write to us</h1>
          <div className="query  relative top-6 border-2 border-slate-300 rounded-lg py-3 px-6">
            <div className='cabinFont1'>
              <input type="text" placeholder='First Name *' className='w-full placeholder:text-slate-400 placeholder:text-sm text-slate-300 border-b-2 border-slate-300 bg-transparent text-md p-1 outline-none mb-2' />
              <input type="text" placeholder='Last Name (Optional)' className='w-full placeholder:text-slate-400 placeholder:text-sm text-slate-300 border-b-2 border-slate-300 bg-transparent text-md p-1 outline-none mb-2' />
              <input type="text" placeholder='Email ID *' className='w-full placeholder:text-slate-400 placeholder:text-sm text-slate-300 border-b-2 border-slate-300 bg-transparent text-md p-1  outline-none mb-3' />
              <h2 className='text-md cabinFont2 text-slate-300 mb-2 ml-1'>query</h2>
              <textarea name="query" id="query" rows={3} cols={37} placeholder='Type Here' className='textsarea rounded-lg placeholder:text-xs placeholder:text-slate-400 p-2 text-sm outline-none resize-none bg-slate-200'></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="review relative top-24 text-lg max-w-[35%] h-[42vh]  flex-col p-3 overflow-auto left-1/2 -translate-x-1/2 cabinFont cabinFont1">
        <div ref={reviewContainerRef} className="reviewContain min-w-[100%] h-full  flex overflow-auto">
          {profiles.map((element, index) => (
            <div key={index} className='relative  profiles min-w-[100%] max-w-[100%] h-full text-slate-300 flex flex-col items-center p-3'>
              <div className="relative profile w-[5vw] h-[5vw] grayIMG3">
                <img src="/IMG/profile.png" alt="profile image" />
              </div>
              <h1 className='relative top-2'>{element[0]}</h1>
              <div className='relative flex text-yellow-500 gap-2 top-4'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="relative revieww top-7">
                <p className='text-center'><FontAwesomeIcon icon={faQuoteLeft} className='text-2xl mr-2 relative -top-1' />{element[1]}<FontAwesomeIcon icon={faQuoteRightAlt} className='text-2xl ml-2 relative top-2' /></p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="relative contactDetail grid grid-cols-[1fr_1fr_1fr_1fr_1fr] w-[100%] h-[25%] top-[25vh] text-slate-300 cabinFont px-16">
        <div className="info1 p-4">
          <h1 className='cabinFont2 text-slate-200 text-lg'>Registered Office Address</h1>
          <p className=' text-sm mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Quasi itaque nisi dolorem consequuntur iusto facere suscipit dignissimos placeat eveniet beatae.
            <span className='block'>jsqjknlda, 100001,</span>
            <span className='block'>xyz, India.</span>
            <br />
            <span className='text-[0.9vw] block'>CIN: U34653JP8690LRE591476</span>
            <span className='text-sm block'>Telephone: 088-88881111 <br />
              <span className='ml-[5.6vw]'>011-11118888</span></span>
          </p>
        </div>
        <div className="info2  p-4">
          <h1 className='cabinFont2 mb-4 text-slate-200 text-lg'>About Elegyn</h1>
          <ul className='text-sm mb-4 cursor-pointer'>
            <li>Who Are We</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Authenticity</li>
            <li>Elegyn stories</li>
            <li>Press</li>
          </ul>

        </div>
        <div className="info3 p-4">
          <h1 className='cabinFont2 mb-4 text-slate-200 text-lg'>Customer Policies</h1>
          <ul className='text-sm mb-4 cursor-pointer'>
            <li>Terms & Conditions</li>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Security</li>
            <li>Corporate Information</li>
            <li>Promotions</li>
          </ul>
        </div>
        <div className="info4 p-4">
          <h1 className='cabinFont2 mb-4 text-slate-200 text-lg'>Help</h1>
          <ul className='text-sm mb-4 cursor-pointer'>
            <li>Your Account</li>
            <li>Track Order</li>
            <li>Shipping & Delivery</li>
            <li>Return & Cancellation</li>
            <li>Payments & Refund</li>
            <li>Site Map</li>
            <li>Store Locator</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="info5  p-4 ">
          <h1 className='cabinFont2 mb-4 text-slate-200 text-lg'>Quick Links</h1>
          <p className='text-sm cursor-pointer'>Oversized Tshirt | Summer Dress | Cargo pants | Crop Tops | Partywear Dresses | Saree | Skirts | Gowns | Kurta Sets | Coords | Winter jacket | Indowestern dress | Lehenga | Nightsuits | Gym Wear | Blazer pant set| Trousers | Wide Leg Jeans | Tunics | Scarfs | Sweaters | Shrugs | Dungarees | Mini Dresses | Shorts | Shirts | Jumpsuits</p>
        </div>
      </div>
      <div className="absolute bottom-16 iconss w-auto left-1/2 -translate-x-1/2 h-[5vw] grayIMG3">
        <img src="/IMG/icons2.png" alt="icons" className='h-[100%]' />
      </div>
      <div className="absolute bottom-0 iconss w-[100%] h-[2vw] cabinFont font-bold bg-yellow-500 mt-2 flex justify-center items-center text-center">
        <span className='text-md'>{'\u00A9'}</span> <span className='text-sm'>2024 www.elegyn.com All rights reserved.</span>
      </div>
    </div >

  )
}

export default ContactUs
