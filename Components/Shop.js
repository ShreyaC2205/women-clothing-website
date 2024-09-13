import { easeInOut, motion } from 'framer-motion'
import React, {useState } from 'react'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'


const Shop = () => {
    const group1 = [["/IMG/kurtaDisply.jpg","Kurties", "Moksha", "4.3", "6,900", "12k"], ["/IMG/jeansDisplay.jpg","Jeans", "FabIndia", "4.4", "8,300", "22k"], ["/IMG/sareeDisply.jpg","Sarees","SilkSavvy", "4.1", "5,200", "8k"]]
    const group2 = [["/IMG/dressDisplay.png","Dresses","ClassyCloset", "4.5", "9,100", "18k"], ["/IMG/tshirtDisply.png","T-shirts","EnVouge", "4.4", "18,000", "31k"], ["/IMG/topsDisplay.jpg","Tops","BellaVista", "4.3", "13,800", "19k"]]
    const group3 = [["/IMG/shirtDisplay.jpg","Shirts","UrbanDiva", "4.5", "9,100", "18k"], ["/IMG/lehengaDisplay.jpg","Wedding Wear","Elegance", "4.4", "18,000", "31k"], ["/IMG/winterDisplay.jpg","Winter Wear","LuxeLoom", "4.3", "13,800", "19k"]]
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);

    const handleLeftClick = () => {
        setActiveSectionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
    };

    const handleRightClick = () => {
        setActiveSectionIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    };
    return (
        <div className='relative w-[100%] h-[100vh] bg-[#A9E5FF] z-50 cursor-pointer overflow-hidden rounded-tl-[2vw] rounded-tr-[2vw] rounded-br-[2vw] rounded-bl-[2vw] '>
            <div className="relative ShopContainer w-4/5 h-full left-1/2 -translate-x-1/2 flex justify-center z-20 -top-6 ">
                <motion.h1 initial={{ color: "rgb(39, 39, 39)", textShadow: "none" }} whileInView={{ color: "rgb(252, 209, 209)", textShadow: "0px 0px 20px #ff0000e8, 0px 0px 20px #ff0000e8,  0px 0px 40px #ff0000e8,  0px 0px 80px #ff0000e8,  0px 0px 160px #ff0000e8" }} transition={{ ease: easeInOut, duration: 1 }} className='shopText absolute text-[7vw] left-1/2 -translate-x-1/2 z-30'>SHOP</motion.h1>
                <Image src="/IMG/canopy.jpg" alt="canopy img" className='absolute h-[80%] object-cover -top-4 z-20 ' width={1200} height={1000} quality={100}/>
            </div>
            <div className="absolute z-10 cardBG w-3/5 h-[68%]  bottom-0 left-1/2 -translate-x-1/2 flex justify-between shadow-xl shadow-gray-900 shadow-l-[2vw] shadow-r-[2vw] shadow-spread-6 overflow-hidden ">
                <Image src="/IMG/wall2.png" alt="wall" className='absolute w-[100%] h-[100%] z-20' width={500} height={0} quality={100}/>
                <div className="shops min-w-[100%] h-full flex  z-40" style={{
                    transform: `translateX(-${activeSectionIndex * 100}%)`,
                    transition: 'transform 1s ease'
                }}>
                    <div className="flex sContain1 min-w-[100%] min-h-[100%] ">
                        {group1.map((element, index) => (
                            <div className='relative  h-[80%] w-[100%] flex justify-center' key={index}>
                                <Image src="/IMG/window7.png" alt="windowImg" className='w-[100%] h-[100%] object-cover  z-30' width={500} height={0} quality={100}/>
                                <div className="sIMG absolute w-[57%] h-[55.5%] z-30 bottom-7 left-[51%] -translate-x-1/2">
                                    <Image src={element[0]} alt="shop" className='w-[100%] h-[100%] object-cover rounded-md' width={500} height={0} quality={100}/>
                                    <h1 className='absolute  text-sm p-[0.1vw] w-full visit top-1/2 -translate-y-[65%] text-center font-bold  uppercase'>{element[1]}</h1>
                                </div>
                                <button className="absolute  w-auto px-4 h-6 left-[6vw] rounded-2xl top-[8vw] bg-yellow-400 z-30 uppercase text-sm font-bold text-gray-800 shadow-md shadow-gray-900/60 shadow-t-[1px] shadow-spread-6 Outfit2">Visit Shop</button>
                                <button className="absolute bg-[#C1B1A2] w-[58%] px-4 h-6 left-[4.5vw] top-[22vw] flex justify-center items-center z-30  text-sm Outfit2 text-gray-800 shadow-md shadow-gray-900/60 shadow-t-[1px] shadow-spread-6 Outfit2">{element[2]}</button>
                                <div className="info -bottom-[6vw] left-[3.2vw] absolute w-[70%] text-gray-800  z-30 flex flex-col gap-1 justify-center pointer-events-auto">
                                    <div className='w-full cursor-pointer'>
                                        <button className=" followShop px-2 py-1 rounded-lg w-full h-7  text-center text-sm bg-yellow-400 Outfit2">FOLLOW</button>
                                    </div>
                                    <div className='shopInfo w-full text-xs flex flex-col rounded-lg justify-center text-center bg-white/70 font-bold py-[0.1vw]'>
                                        <span>{element[3]}{'\u2605'}</span><span>{element[4]} ratings</span><span>{element[5]} followers</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className=" flex sContain2 min-w-[100%] min-h-[100%]">
                        {group2.map((element, index) => (
                            <div className='relative  h-[80%] w-[100%] flex justify-center' key={index}>
                                <Image src="/IMG/window7.png" alt="windowImg" className='w-[100%] h-[100%] object-cover  z-30' width={500} height={0} quality={100}/>
                                <div className="sIMG absolute w-[57%] h-[55.5%] z-30 bottom-7 left-[51%] -translate-x-1/2">
                                    <Image src={element[0]} alt="shop" className='w-[100%] h-[100%] object-cover rounded-md' width={500} height={0} quality={100}/>
                                    <h1 className='absolute  text-sm p-[0.1vw] w-full visit top-1/2 -translate-y-[65%] text-center font-bold  uppercase'>{element[1]}</h1>
                                </div>
                                <button className="absolute  w-auto px-4 h-6 left-[6vw] rounded-2xl top-[8vw] bg-yellow-400 z-30 uppercase text-sm font-bold text-gray-800 shadow-md shadow-gray-900/60 shadow-t-[1px] shadow-spread-6">Visit Shop</button>
                                <button className="absolute bg-[#C1B1A2] w-[58%] rounded-sm px-4 h-6 left-[4.5vw] top-[22vw]  z-30 flex justify-center items-center text-sm text-gray-800 shadow-md shadow-gray-900/60 shadow-t-[1px] shadow-spread-6 Outfit2">{element[2]}</button>
                                <div className="info -bottom-[6vw] left-[3.2vw] absolute w-[70%] text-gray-800  z-30 flex flex-col gap-1 justify-center">
                                    <div className='w-full cursor-pointer'>
                                        <button className=" followShop px-2 py-1 rounded-lg w-full h-7  text-center text-sm bg-yellow-400 font-bold">FOLLOW</button>
                                    </div>
                                    <div className='shopInfo w-full text-xs flex flex-col rounded-lg justify-center text-center bg-white/70 font-bold py-[0.1vw]'>
                                        <span>{element[3]}{'\u2605'}</span><span>{element[4]} ratings</span><span>{element[5]} followers</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className=" flex sContain3 min-w-[100%] min-h-[100%]">
                        {group3.map((element, index) => (
                            <div className='relative  h-[80%] w-[100%] flex justify-center' key={index}>
                                <Image src="/IMG/window7.png" alt="windowImg" className='w-[100%] h-[100%] object-cover  z-30' width={500} height={0} quality={100}/>
                                <div className="sIMG absolute w-[57%] h-[55.5%] z-30 bottom-7 left-[51%] -translate-x-1/2">
                                    <Image src={element[0]} alt="shop" className='w-[100%] h-[100%] object-cover rounded-md' width={500} height={0} quality={100}/>
                                    <h1 className='absolute  text-sm p-[0.1vw] w-full visit top-1/2 -translate-y-[65%] text-center font-bold  uppercase'>{element[1]}</h1>
                                </div>
                                <button className="absolute  w-auto px-4 h-6 left-[6vw] rounded-2xl top-[8vw] bg-yellow-400 z-30 uppercase text-sm font-bold text-gray-800 shadow-md shadow-gray-900/60 shadow-t-[1px] shadow-spread-6">Visit Shop</button>
                                <button className="absolute bg-[#C1B1A2] w-[58%] px-4 h-6 left-[4.5vw] top-[22vw]  z-30 flex justify-center items-center text-sm  text-gray-800 overflow-hidden shadow-md shadow-gray-900/60 shadow-t-[1px] shadow-spread-6 Outfit2">{element[2]}
                                 </button>
                                <div className="info -bottom-[6vw] left-[3.2vw] absolute w-[70%] text-gray-800  z-30 flex flex-col gap-1 justify-center">
                                    <div className='w-full'>
                                        <button className=" followShop px-2 py-1 rounded-lg w-full h-7  text-center text-sm bg-yellow-400 font-bold ">FOLLOW</button>
                                    </div>
                                    <div className='shopInfo w-full text-xs flex flex-col rounded-lg justify-center text-center bg-white/70 font-bold py-[0.1vw]'>
                                        <span>{element[3]}{'\u2605'}</span><span>{element[4]} ratings</span><span>{element[5]} followers</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className='absolute top-[65%] left-[15.3%] leftBtn w-16 h-28 rounded-tl-xl rounded-bl-xl bg-yellow-400 z-[99] shadow-xl' onClick={handleLeftClick}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} className='text-[3vw] text-gray-800' />
            </button>
            <button className='absolute top-[65%] right-[15.3%] rightBtn w-16 h-28 rounded-tr-xl rounded-br-xl bg-yellow-400 z-[99] shadow-xl' onClick={handleRightClick}>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='text-[3vw] text-gray-800' />
            </button>
        </div>
    )
}

export default Shop
