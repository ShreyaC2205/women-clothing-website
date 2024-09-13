import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import CategoryCard from './CategoryCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
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
        const tl = new Timeline({ repeat: -1, repeatDealay: 8 });

        tl.to(".CateText", {
            ease: "expo.inOut",
            stagger: 5,
            left: "40%",
            duration: 2
        }, 'anim')
            .to(".CateText", {
                delay: 5,
                ease: "expo.inOut",
                stagger: 5,
                left: "100%",
            }, 'anim');

        tl.to(".CateText1", {
            ease: "expo.inOut",
            stagger: 5,
            top: "12%",
            duration: 2
        }, 'anim')
            .to(".CateText1", {
                delay: 5,
                ease: "expo.inOut",
                stagger: 5,
                top: "-100%",
            }, 'anim');

        tl.to(".CateText2", {
            ease: "expo.inOut",
            stagger: 5,
            top: "12%",
            duration: 2
        }, 'anim')
            .to(".CateText2", {
                delay: 5,
                ease: "expo.inOut",
                stagger: 5,
                top: "-100%",
            }, 'anim');
    })


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

    const cateRefs = {
        cate1: useRef(null),
        cate2: useRef(null),
        cate3: useRef(null),
        cate4: useRef(null),
        cate5: useRef(null),
        cate6: useRef(null),
    };

    const handleScrollUp = (cateRef) => {
        if (cateRef.current) {
            const container = cateRef.current;
            const scrollAmount = window.innerWidth * 0.2; 

            container.scrollTo({
                top: container.scrollTop + scrollAmount,
                behavior: 'smooth'
            });

       
            if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                container.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.15" className='relative w-[100%] h-[100vh] bg-[#A9E5FF] rounded-tl-[2vw] rounded-tr-[2vw] rounded-br-[2vw] rounded-bl-[2vw] flex justify-center overflow-hidden select-none z-50'>
            <motion.div initial={{ bottom: "1vw" }} whileInView={{ top: "1vw" }} transition={{ ease: "easeInOut", duration: 2, delay:1 }} className="absolute z-20 s categContainer w-[98%] h-[83%] rounded-xl shadow-md shadow-slate-500 shadow-b-[1px] shadow-r-[3px] -shadow-spread-5 bg-slate-100 grid grid-cols-[15%_15%_15%_8%_15%_15%_15%] pt-2 pb-2 justify-center">

                <button className="arrow-container  absolute bottom-0 left-[7vw] text-[3vw] w-[3vw] h-[4vw] flex justify-center z-40"
                    onClick={() => handleScrollUp(cateRefs.cate1)}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </button>
                <div className="relative cate1 overflow-y-auto rounded-tl-xl rounded-bl-xl bg-amber-200 scrollInvisisble flex-cols justify-center p-2 cate" ref={cateRefs.cate1}>
                    {imgArr1.map((element, index) => (
                        <div key={`category1_${index}`} className='slideDownUp min-h-[55%] max-h-[55%] grid grid-rows-[80%_20%] gap-2'>
                            <CategoryCard img1={element[0]} img2={element[1]} img3={element[2]} />
                            <div className="cateTitle rounded-md flex justify-center items-center  mb-4" style={{ backgroundImage: `url("/IMG/categories/clipart/bgText.jpg")` }}><span
                                className="text-background-color px-2 Outfit2 text-gray-900 rounded-md"
                                style={{ fontSize: '1.2vw', fontWeight: "bold", backgroundColor: "white" }}
                            >
                                {categNames1[index]}
                            </span></div>
                        </div>
                    ))}
                </div>


                <button className="arrow-container  absolute bottom-0 left-[21.5vw] text-[3vw] w-[3vw] h-[4vw] flex justify-center z-40"
                    onClick={() => handleScrollUp(cateRefs.cate2)}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </button>
                <div className="relative cate2 overflow-y-auto scrollInvisisble  bg-blue-300 flex-cols justify-center p-2 pb-2 cate"ref={cateRefs.cate2}>
                    <div className="relative extra rounded-lg h-10 w-full flex justify-center uppercase text-stone-600 text-lg bg-slate-100 mb-2 overflow-hidden">
                        {FlashText1.map((element, index) => (
                            <h1 key={`flashText1_${index}`} className='absolute CateText1 text-slate-800 -bottom-96'>
                                <span>{element}</span>
                            </h1>
                        ))}
                    </div>
                    {imgArr2.map((element, index) => (
                        <div key={`category2_${index}`} className='slideDownUp min-h-[55%] max-h-[55%] grid grid-rows-[80%_20%] gap-2'>
                            <CategoryCard img1={element[0]} img2={element[1]} img3={element[2]} />
                            <div className="cateTitle rounded-md flex justify-center items-center mt1 mb-4" style={{ backgroundImage: `url("/IMG/categories/clipart/bgText.jpg")` }}><span
                                className="text-background-color px-2 Outfit2 text-gray-900 rounded-md"
                                style={{ fontSize: '1.2vw', fontWeight: "bold", backgroundColor: "white" }}
                            >
                                {categNames2[index]}
                            </span></div>
                        </div>
                    ))}
                </div>

                <button className="arrow-container  absolute bottom-0 left-[36vw] text-[3vw] w-[3vw] h-[4vw] flex justify-center z-40"
                    onClick={() => handleScrollUp(cateRefs.cate3)}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </button>
                <div className="relative cate3 overflow-y-auto scrollInvisisble rounded-tr-xl flex-cols justify-center p-2 pb-2 bg-amber-200 cate"ref={cateRefs.cate3}> 
                    {imgArr3.map((element, index) => (
                        <div key={`category3_${index}`} className='slideDownUp min-h-[55%] max-h-[55%] grid grid-rows-[80%_20%] gap-2'>
                            <CategoryCard img1={element[0]} img2={element[1]} img3={element[2]} />
                            <div className="cateTitle rounded-md flex justify-center items-center mt1 mb-4" style={{ backgroundImage: `url("/IMG/categories/clipart/bgText.jpg")` }}><span
                                className="text-background-color px-2 Outfit2 text-gray-900 rounded-md"
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

                <button className="arrow-container  absolute bottom-0 left-[59vw] text-[3vw] w-[3vw] h-[4vw] flex justify-center z-40"
                    onClick={() => handleScrollUp(cateRefs.cate4)}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </button>
                <div className="relative cate4 overflow-y-auto scrollInvisisble rounded-tl-xl bg-amber-200 flex-cols justify-center p-2 pb-2 cate" ref={cateRefs.cate4}>
                    {imgArr4.map((element, index) => (
                        <div key={`category4_${index}`} className='slideDownUp min-h-[55%] max-h-[55%] grid grid-rows-[80%_20%] gap-2'>
                            <CategoryCard img1={element[0]} img2={element[1]} img3={element[2]} />
                            <div className="cateTitle rounded-md flex justify-center items-center mt1 mb-4" style={{ backgroundImage: `url("/IMG/categories/clipart/bgText.jpg")` }}><span
                                className="text-background-color px-2 Outfit2 text-gray-900 rounded-md"
                                style={{ fontSize: '1.2vw', fontWeight: "bold", backgroundColor: "white" }}
                            >
                                {categNames4[index]}
                            </span></div>
                        </div>
                    ))}
                </div>

                <button className="arrow-container  absolute bottom-0 left-[73vw] text-[3vw] w-[3vw] h-[4vw] flex justify-center z-40"
                    onClick={() => handleScrollUp(cateRefs.cate5)}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </button>
                <div className="relative cate5 overflow-y-auto scrollInvisisble bg-blue-300 flex-cols justify-center p-2 pb-2 cate" ref={cateRefs.cate5}>
                    <div className="relative extra rounded-lg h-10 w-full flex justify-center text-lg uppercase text-stone-600 bg-slate-100 mb-2 overflow-hidden">
                        {FlashText2.map((element, index) => (
                            <h1 key={`flashText2_${index}`} className='absolute CateText2 text-slate-800 -bottom-96'>
                                <span>{element}</span>
                            </h1>
                        ))}
                    </div>
                    {imgArr5.map((element, index) => (
                        <div key={`category5_${index}`} className='slideDownUp min-h-[55%] max-h-[55%] grid grid-rows-[80%_20%] gap-2'>
                            <CategoryCard img1={element[0]} img2={element[1]} img3={element[2]} />
                            <div className="cateTitle rounded-md flex justify-center items-center mt1 mb-4" style={{ backgroundImage: `url("/IMG/categories/clipart/bgText.jpg")` }}><span
                                className="text-background-color px-2 Outfit2 text-gray-900 rounded-md"
                                style={{ fontSize: '1.2vw', fontWeight: "bold", backgroundColor: "white" }}
                            >
                                {categNames5[index]}
                            </span></div>
                        </div>
                    ))}
                </div>

                <button className="arrow-container  absolute bottom-0 left-[88vw] text-[3vw] w-[3vw] h-[4vw] flex justify-center z-40"
                    onClick={() => handleScrollUp(cateRefs.cate6)}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </button>
                <div className="relative cate6 overflow-y-auto scrollInvisisble rounded-tr-xl rounded-bl-xl bg-amber-200 flex-cols justify-center p-2 pb-2 cate" ref={cateRefs.cate6}>
                    {imgArr6.map((element, index) => (
                        <div key={`category6_${index}`} className='slideDownUp min-h-[55%] max-h-[55%] grid grid-rows-[80%_20%] gap-2'>
                            <CategoryCard img1={element[0]} img2={element[1]} img3={element[2]} />
                            <div className="cateTitle rounded-md flex justify-center items-center mt1 mb-4" style={{ backgroundImage: `url("/IMG/categories/clipart/bgText.jpg")` }}><span
                                className="text-background-color px-2 Outfit2 text-gray-900 rounded-md"
                                style={{ fontSize: '1.2vw', fontWeight: "bold", backgroundColor: "white" }}
                            >
                                {categNames6[index]}
                            </span></div>
                        </div>
                    ))}
                </div>
            </motion.div>
            <div className="absolute z-10 -bottom-[5.9vw] categH1 text-[#62d0ffce] text-[15vw]">CATEGORIES</div>
        </div>
    )
}

export default Categories
