import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import CategoryCard from './CategoryCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { Timeline } from 'gsap/gsap-core'

gsap.registerPlugin(useGSAP);
const Categories = () => {

    const texts = ["Latest Trend", "Wide Range", "Rare Finds", "Top Brands", "Steal Deals"];

    const FlashText1 = ["Top Wear", "Ethnic Wear", "Thermal Wear", "Bottom Wear", "Party Wear"]
    const FlashText2 = ["Active Wear", "Casual Wear", "Work Wear", "Sleep Wear", "Wedding Wear"]

    const VerticalText = ({ text }) => (
        <div className='absolute w-auto max-h-full CateText -left-10 text-center'>
            {text.split('').map((char, charIndex) => (
                <React.Fragment key={charIndex}>
                    {char === ' ' ? <div className="vertical-text-space">&nbsp;</div> : <div className="vertical-text-char">{char}</div>}
                </React.Fragment>
            ))}
        </div>
    );

    useGSAP(() => {
        const tl = new Timeline({ repeat: -1, repeatDealay: 8 })
        tl.to(".CateText", {
            ease: "expo.inOut",
            stagger: 5,
            left: "40%",
            duration: 2
        }, 'anim').to(".CateText", {
            delay: 5,
            ease: "expo.inOut",
            stagger: 5,
            left: "100%",
        }, 'anim').to(".CateText1", {
            ease: "expo.inOut",
            stagger: 5,
            top: "12%",
            duration: 2
          }, 'anim').to(".CateText1", {
            delay: 5,
            ease: "expo.inOut",
            stagger: 5,
            top: "-100%",
          }, 'anim').to(".CateText2", {
            ease: "expo.inOut",
            stagger: 5,
            top: "12%",
            duration: 2
          }, 'anim').to(".CateText2", {
            delay: 5,
            ease: "expo.inOut",
            stagger: 5,
            top: "-100%",
          }, 'anim')

    })


    useEffect(() => {
        const cateArrows = document.querySelectorAll('.cate .arrow-container');

        cateArrows.forEach(arrow => {
            const cate = arrow.closest('.cate');

            cate.addEventListener('scroll', function () {
                const scrollPercentage = (cate.scrollTop + cate.clientHeight) / cate.scrollHeight * 100;

                if (scrollPercentage >= 20) {
                    arrow.style.display = 'none';
                } else {
                    arrow.style.display = 'block';
                }
            });
        });
    }, []);


    const imgArr1 = [["/IMG/categories/tshirt1.jpg", "/IMG/categories/tshirt2.jpg", "/IMG/categories/tshirt3.jpg"], ["/IMG/categories/top1.jpg", "/IMG/categories/top2.jpg", "/IMG/categories/top3.jpg"], ["/IMG/categories/shirt1.jpg", "/IMG/categories/shirt2.jpg", "/IMG/categories/shirt3.jpg"], ["/IMG/categories/jacket1.jpg", "/IMG/categories/jacket2.jpg", "/IMG/categories/jacket3.jpg"], ["/IMG/categories/shrug1.jpg", "/IMG/categories/shrug2.jpg", "/IMG/categories/shrug3.jpg"]]
    const imgArr2 = [["/IMG/categories/kurtaSet1.jpg", "/IMG/categories/kurtaSet2.jpg", "/IMG/categories/kurtaSet3.jpg"], ["/IMG/categories/saree1.jpg", "/IMG/categories/saree2.jpg", "/IMG/categories/saree3.jpg"], ["/IMG/categories/bottom1.jpg", "/IMG/categories/bottom2.jpg", "/IMG/categories/bottom3.jpg"], ["/IMG/categories/kurti1.jpg", "/IMG/categories/kurti2.jpg", "/IMG/categories/kurti3.jpg"], ["/IMG/categories/plus1.jpg", "/IMG/categories/plus2.jpg", "/IMG/categories/plus3.jpg"]]
    const imgArr3 = [["/IMG/categories/lehenga1.jpg", "/IMG/categories/lehenga2.jpg", "/IMG/categories/lehenga3.jpg"], ["/IMG/categories/ethnicdress1.jpg", "/IMG/categories/ethnicdress2.jpg", "/IMG/categories/ethnicdress3.jpg"], ["/IMG/categories/fusion1.jpg", "/IMG/categories/fusion2.jpg", "/IMG/categories/fusion3.jpg"], ["/IMG/categories/dupatta1.jpg", "/IMG/categories/dupatta2.jpg", "/IMG/categories/dupatta3.jpg"], ["/IMG/categories/dressMaterial1.jpg", "/IMG/categories/dressMaterial2.jpg", "/IMG/categories/dressMaterial3.jpg"]]
    const imgArr4 = [["/IMG/categories/skirt1.jpg", "/IMG/categories/skirt2.jpg", "/IMG/categories/skirt3.jpg"], ["/IMG/categories/trouser1.jpg", "/IMG/categories/trouser2.jpg", "/IMG/categories/trouser3.jpg"], ["/IMG/categories/jeans1.jpg", "/IMG/categories/jeans2.jpg", "/IMG/categories/jeans3.jpg"], ["/IMG/categories/trackwear1.jpg", "/IMG/categories/trackwear2.jpg", "/IMG/categories/trackwear3.jpg"], ["/IMG/categories/shorts1.jpg", "/IMG/categories/shorts2.jpg", "/IMG/categories/shorts3.jpg"]]
    const imgArr5 = [["/IMG/categories/gown1.jpg", "/IMG/categories/gown2.jpg", "/IMG/categories/gown3.jpg"], ["/IMG/categories/dress1.jpg", "/IMG/categories/dress2.jpg", "/IMG/categories/dress3.jpg"], ["/IMG/categories/party1.jpg", "/IMG/categories/party2.jpg", "/IMG/categories/party3.jpg"], ["/IMG/categories/formals1.jpg", "/IMG/categories/formals2.jpg", "/IMG/categories/formals3.jpg"], ["/IMG/categories/coord1.jpg", "/IMG/categories/coord2.jpg", "/IMG/categories/coord3.jpg"]]
    const imgArr6 = [["/IMG/categories/winter1.jpg", "/IMG/categories/winter2.jpg", "/IMG/categories/winter3.jpg"], ["/IMG/categories/activewear1.jpg", "/IMG/categories/activewear2.jpg", "/IMG/categories/activewear3.jpg"], ["/IMG/categories/jumpsuit1.jpg", "/IMG/categories/jumpsuit2.jpg", "/IMG/categories/jumpsuit3.jpg"], ["/IMG/categories/loung1.jpg", "/IMG/categories/loung2.jpg", "/IMG/categories/loung3.jpg"], ["/IMG/categories/dungaree1.jpg", "/IMG/categories/dungaree2.jpg", "/IMG/categories/dungaree3.jpg"]]

    const categNames1 = ["Tshirts", "Tops", "Shirts", "Jackets", "Shrugs"]
    const categNames2 = ["Kurta Sets", "Saree", "Ethnic Bottomwear", "Kurtis", "Plus Size"]
    const categNames3 = ["Lehenga", "Ethnic Dresses", "Indo Western", "Dupatta & Stoles", "Dress Material"]
    const categNames4 = ["Skirts", "Trousers", "Jeans", "Trackwear", "shorts"]
    const categNames5 = ["Gowns", "Dresses", "Party Wear", "Formals", "Coords"]
    const categNames6 = ["Winter wear", "Activewear", "Jumpsuits", "Loungewear", "Dungaree"]

    return (
        <div className='relative w-[100%] h-[100vh] bg-[#A9E5FF] rounded-tl-[2vw] rounded-tr-[2vw] flex justify-center overflow-hidden select-none'>
            <motion.div initial={{ bottom: "1vw" }} whileInView={{ top: "1vw" }} transition={{ ease: "easeInOut", duration: 2 }} className="absolute z-20 categContainer w-[98%] h-[83%] rounded-xl shadow-md shadow-slate-500 shadow-b-[1px] shadow-r-[3px] -shadow-spread-5 bg-slate-100 grid grid-cols-[15%_15%_15%_8%_15%_15%_15%] pt-2 pb-2 justify-center">
                <div className="relative cate1 overflow-y-auto rounded-tl-xl rounded-bl-xl bg-amber-200 scrollInvisisble flex-cols justify-center p-2 cate">
                    <motion.div
                        className="arrow-container absolute bottom-8 left-1/2 -translate-x-1/ text-[3vw] w-[3vw] h-[4vw] flex justify-center z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="arrow"
                            animate={{
                                y: [-10, 10, -10],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse", // Swing back and forth
                            }}
                        >
                            <FontAwesomeIcon icon={faAngleDoubleUp} />
                        </motion.div>
                    </motion.div>
                    {imgArr1.map((element, index) => (
                        <div className='slideDownUp min-h-[55%] max-h-[55%] grid grid-rows-[80%_20%] gap-2' key={index}>
                            <CategoryCard img1={element[0]} img2={element[1]} img3={element[2]} />
                            <div className="cateTitle rounded-md flex justify-center items-center  mb-4" style={{ backgroundImage: `url("/IMG/categories/clipart/bgText.jpg")` }}><span
                                className="text-background-color px-2  rounded-md"
                                style={{ fontSize: '1.2vw', fontWeight: "bold", backgroundColor: "white" }}
                            >
                                {categNames1[index]}
                            </span></div>
                        </div>
                    ))}
                </div>


                <div className="relative cate2 overflow-y-auto scrollInvisisble  bg-blue-300 flex-cols justify-center p-2 pb-2 cate">
                <div className="relative extra rounded-lg h-10 w-full flex justify-center uppercase text-stone-600 text-lg bg-slate-100 mb-2 overflow-hidden">
                        {FlashText1.map((element, index)=>(
                        <h1 className='absolute CateText1 -bottom-96'>
                            <span key={index}>{element}</span>
                        </h1>
                        ))}
                    </div>
                    <motion.div
                        className="arrow-container absolute bottom-8 left-1/2 -translate-x-1/2 text-[3vw] w-[3vw] h-[4vw] flex justify-center z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="arrow"
                            animate={{
                                y: [-10, 10, -10], // Swinging animation
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse", // Swing back and forth
                            }}
                        >
                            <FontAwesomeIcon icon={faAngleDoubleUp} />
                        </motion.div>
                    </motion.div>
                    {imgArr2.map((element, index) => (
                        <div className='slideDownUp min-h-[55%] max-h-[55%] grid grid-rows-[80%_20%] gap-2' key={index}>
                            <CategoryCard img1={element[0]} img2={element[1]} img3={element[2]} />
                            <div className="cateTitle rounded-md flex justify-center items-center mt1 mb-4" style={{ backgroundImage: `url("/IMG/categories/clipart/bgText.jpg")` }}><span
                                className="text-background-color px-2  rounded-md"
                                style={{ fontSize: '1.2vw', fontWeight: "bold", backgroundColor: "white" }}
                            >
                                {categNames2[index]}
                            </span></div>
                        </div>
                    ))}
                </div>

                <div className="relative cate3 overflow-y-auto scrollInvisisble rounded-tr-xl flex-cols justify-center p-2 pb-2 bg-amber-200 cate">
                    <motion.div
                        className="arrow-container absolute bottom-8 left-1/2 -translate-x-1/2 text-[3vw] w-[3vw] h-[4vw] flex justify-center z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="arrow"
                            animate={{
                                y: [-10, 10, -10], // Swinging animation
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse", // Swing back and forth
                            }}
                        >
                            <FontAwesomeIcon icon={faAngleDoubleUp} />
                        </motion.div>
                    </motion.div>
                    {imgArr3.map((element, index) => (
                        <div className='slideDownUp min-h-[55%] max-h-[55%] grid grid-rows-[80%_20%] gap-2' key={index}>
                            <CategoryCard img1={element[0]} img2={element[1]} img3={element[2]} />
                            <div className="cateTitle rounded-md flex justify-center items-center mt1 mb-4" style={{ backgroundImage: `url("/IMG/categories/clipart/bgText.jpg")` }}><span
                                className="text-background-color px-2  rounded-md"
                                style={{ fontSize: '1.2vw', fontWeight: "bold", backgroundColor: "white" }}
                            >
                                {categNames3[index]}
                            </span></div>
                        </div>
                    ))}
                </div>


                <div className="textC overflow-hidden flex justify-center items-center text-[2vw] relative uppercase">
                    {texts.map((text, index) => (
                        <VerticalText key={index} text={text} />
                    ))}
                </div>

                <div className="relative cate4 overflow-y-auto scrollInvisisble rounded-tl-xl bg-amber-200 flex-cols justify-center p-2 pb-2 cate">
                    <motion.div
                        className="arrow-container absolute bottom-8 left-1/2 -translate-x-1/2 text-[3vw] w-[3vw] h-[4vw] flex justify-center z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="arrow"
                            animate={{
                                y: [-10, 10, -10], // Swinging animation
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse", // Swing back and forth
                            }}
                        >
                            <FontAwesomeIcon icon={faAngleDoubleUp} />
                        </motion.div>
                    </motion.div>
                    {imgArr4.map((element, index) => (
                        <div className='slideDownUp min-h-[55%] max-h-[55%] grid grid-rows-[80%_20%] gap-2' key={index}>
                            <CategoryCard img1={element[0]} img2={element[1]} img3={element[2]} />
                            <div className="cateTitle rounded-md flex justify-center items-center mt1 mb-4" style={{ backgroundImage: `url("/IMG/categories/clipart/bgText.jpg")` }}><span
                                className="text-background-color px-2  rounded-md"
                                style={{ fontSize: '1.2vw', fontWeight: "bold", backgroundColor: "white" }}
                            >
                                {categNames4[index]}
                            </span></div>
                        </div>
                    ))}
                </div>

                <div className="relative cate5 overflow-y-auto scrollInvisisble bg-blue-300 flex-cols justify-center p-2 pb-2">
                    <div className="relative extra rounded-lg h-10 w-full flex justify-center text-lg uppercase text-stone-600 bg-slate-100 mb-2 overflow-hidden">
                        {FlashText2.map((element, index)=>(
                        <h1 className='absolute CateText2 -bottom-96'>
                            <span key={index}>{element}</span>
                        </h1>
                        ))}
                    </div>
                    <motion.div
                        className="arrow-container absolute bottom-8 left-1/2 -translate-x-1/2 text-[3vw] w-[3vw] h-[4vw] flex justify-center z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="arrow"
                            animate={{
                                y: [-10, 10, -10], // Swinging animation
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse", // Swing back and forth
                            }}
                        >
                            <FontAwesomeIcon icon={faAngleDoubleUp} />
                        </motion.div>
                    </motion.div>
                    {imgArr5.map((element, index) => (
                        <div className='slideDownUp min-h-[55%] max-h-[55%] grid grid-rows-[80%_20%] gap-2' key={index}>
                            <CategoryCard img1={element[0]} img2={element[1]} img3={element[2]} />
                            <div className="cateTitle rounded-md flex justify-center items-center mt1 mb-4" style={{ backgroundImage: `url("/IMG/categories/clipart/bgText.jpg")` }}><span
                                className="text-background-color px-2  rounded-md"
                                style={{ fontSize: '1.2vw', fontWeight: "bold", backgroundColor: "white" }}
                            >
                                {categNames5[index]}
                            </span></div>
                        </div>
                    ))}
                </div>
                <div className="relative cate6 overflow-y-auto scrollInvisisble rounded-tr-xl rounded-bl-xl bg-amber-200 flex-cols justify-center p-2 pb-2 cate">
                    <motion.div
                        className="arrow-container absolute bottom-8 left-1/2 -translate-x-1/2 text-[3vw] w-[3vw] h-[4vw] flex justify-center z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="arrow"
                            animate={{
                                y: [-10, 10, -10], // Swinging animation
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse", // Swing back and forth
                            }}
                        >
                            <FontAwesomeIcon icon={faAngleDoubleUp} />
                        </motion.div>
                    </motion.div>
                    {imgArr6.map((element, index) => (
                        <div className='slideDownUp min-h-[55%] max-h-[55%] grid grid-rows-[80%_20%] gap-2' key={index}>
                            <CategoryCard img1={element[0]} img2={element[1]} img3={element[2]} />
                            <div className="cateTitle rounded-md flex justify-center items-center mt1 mb-4" style={{ backgroundImage: `url("/IMG/categories/clipart/bgText.jpg")` }}><span
                                className="text-background-color px-2  rounded-md"
                                style={{ fontSize: '1.2vw', fontWeight: "bold", backgroundColor: "white" }}
                            >
                                {categNames6[index]}
                            </span></div>
                        </div>
                    ))}
                </div>
            </motion.div>
            <div className="absolute z-10 offerText -bottom-[6.5vw] categH1 text-[#62d0ffce] text-[16vw]">CATEGORIES</div>


            {/*TEXT SCROLL UP LOGIC */}
            {/* <div className='relative w-full h-full  rounded-tl-[2vw] rounded-tr-[2vw] overflow-hidden'>
                <div className="title h-[12%] coText flex m-0 p-0  justify-center z-0">
                    <motion.span initial={{ y: "70%" }} whileInView={{ y: "0" }} transition={{ ease: cubicBezier(.72, 0, .52, .90), duration: 1.2 }} className='relative -top-2 text-[6vw] m-0 p-0 '>CATEGORY</motion.span>
                </div> */}
            {/* <div className=' overflow-hidden scrollText min-h-[77%] z-10 h-[77%] w-[100%] absolute  bottom-0 left-1/2 -translate-x-1/2'>
                    <div className="offerTextroll leading-[7vw] text-center">
                        <h1 className='offerText text-[7vw] text-[#62d0ffce]'><span className='coText mr-8'>LATEST</span>FASHION<span className='coText ml-8'>HUB</span></h1>
                        <h1 className='offerText text-[7vw] text-[#62d0ffce]'><span className='coText mr-8'>URBAN</span>STYLE<span className='coText ml-8'>STOP</span></h1>
                        <h1 className='offerText text-[7vw] text-[#62d0ffce]'><span className='coText mr-8'>STYLE</span>HAVEN<span className='coText ml-8'>BASE</span></h1>
                        <h1 className='offerText text-[7vw] text-[#62d0ffce]'><span className='coText mr-8'>FASHION</span>LOFT<span className='coText ml-8'>SPOT</span></h1>
                        <h1 className='offerText text-[7vw] text-[#62d0ffce]'><span className='coText mr-8'>STYLE</span>MECCA<span className='coText ml-8'>LOFT</span></h1>
                    </div>

                    <div className="offerTextroll leading-[7vw] text-center">
                        <h1 className='offerText text-[7vw] text-[#62d0ffce]'><span className='coText mr-8'>CHIC</span>STYLE<span className='coText ml-8'>STOP</span></h1>
                        <h1 className='offerText text-[7vw] text-[#62d0ffce]'><span className='coText mr-8'>STYLE</span>AVENUE<span className='coText ml-8'>ZONE</span></h1>
                        <h1 className='offerText text-[7vw] text-[#62d0ffce]'><span className='coText mr-8'>MODERN</span>TREND<span className='coText ml-8'>HAVEN</span></h1>
                        <h1 className='offerText text-[7vw] text-[#62d0ffce]'><span className='coText mr-8'>FASHION</span>VOGUE<span className='coText ml-8'>ZONE</span></h1>
                        <h1 className='offerText text-[7vw] text-[#62d0ffce]'><span className='coText mr-8'>TRENDY</span>STYLE<span className='coText ml-8'>DEN</span></h1>
                    </div>
                </div> */}

            {/*IMAGE SLIDE LOGIC */}
            {/* <div className='absolute z-10 min-w-[200%]  offerText top-[12vw] left-0 categText text-[12vw] text-[#62d0ffce] text-bold'>
                    <h1>Style avanue zone</h1>
                </div>
                <div className="relative catege2 min-h-[40%] w-auto  overflow-x-auto pl-4 overflow-y-hidden">
                    <div className="absolute z-20 container min-w-[200%] h-[90%]  flex gap-3">
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                    </div>
                </div>
                <div className='absolute z-10 min-w-[200%]  offerText top-[32vw] left-0 categText text-[12vw] text-[#62d0ffce] text-bold'>
                    <h1>T-shirt dress crop top trousers </h1>
                </div> */}
            {/* <div className="relative catege2 h-[40%] w-auto  flex items-center overflow-auto pl-4">
                    <div className="absolute z-20  container min-w-[200%] h-[90%] flex gap-3">
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                    </div>
                </div>
            </div> */}


        </div>
    )
}

export default Categories
